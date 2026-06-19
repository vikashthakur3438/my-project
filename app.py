import asyncio
import json
import logging
import websockets
from greenswitch import InboundESL

# Configure logging
logging.basicConfig(level=logging.INFO)

# Keep track of connected JavaScript browser clients
CONNECTED_CLIENTS = set()

# 1. FreeSWITCH Event Handler
def fs_event_handler(event):
    # This function runs whenever FreeSWITCH sends an event
    event_name = event.headers.get('Event-Name')
    print(f"Captured FreeSWITCH Event: {event_name}")
    
    # Prepare payload for JavaScript
    payload = {
        "event": event_name,
        "uuid": event.headers.get('Unique-ID'),
        "caller_number": event.headers.get('Caller-Caller-ID-Number'),
        "callee_number": event.headers.get('Caller-Destination-Number')
    }
    
    # Broadcast to all connected WebSocket clients
    if CONNECTED_CLIENTS:
        message = json.dumps(payload)
        # Use asyncio safely from a synchronous background thread
        asyncio.run_coroutine_threadsafe(broadcast(message), asyncio.get_event_loop())

async def broadcast(message):
    for websocket in CONNECTED_CLIENTS.copy():
        try:
            await websocket.send(message)
        except websockets.ConnectionClosed:
            CONNECTED_CLIENTS.remove(websocket)

# 2. WebSocket Server Handler
async def socket_handler(websocket):
    # Register client
    CONNECTED_CLIENTS.add(websocket)
    print(f"JavaScript client connected! Total clients: {len(CONNECTED_CLIENTS)}")
    try:
        async for message in websocket:
            # You can handle messages sent from JS here if needed
            pass
    except websockets.ConnectionClosed:
        pass
    finally:
        CONNECTED_CLIENTS.remove(websocket)
        print("JavaScript client disconnected.")

# 3. Main Runner
async def main():
    # Your correct Linux FreeSWITCH IP address
    FREESWITCH_IP = "172.30.0.57" 
    
    # Connected using lowercase password 'cluecon' to match your Linux server
    esl = InboundESL(host=FREESWITCH_IP, port=8021, password="cluecon")
    
    try:
        esl.connect()
        # Request all events related to calls (CHANNEL_CREATE, CHANNEL_HANGUP, etc.)
        esl.send("event plain CHANNEL_CREATE CHANNEL_HANGUP CHANNEL_ANSWER")
        
        # Start a background thread to register our event handler
        esl.register_handle('*', fs_event_handler)
        
        print("Successfully connected to FreeSWITCH ESL!")
    except Exception as e:
        print(f"Could not connect to FreeSWITCH: {e}")
        return

    # Start the WebSocket server on your Windows machine (port 8765)
    print("Starting WebSocket server on ws://0.0.0.0:8765...")
    async with websockets.serve(socket_handler, "0.0.0.0", 8765):
        await asyncio.Future() # run forever

if __name__ == "__main__":
    asyncio.run(main())