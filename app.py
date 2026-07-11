import asyncio
import json
import websockets

FS_HOST = "172.30.0.57"
FS_PORT = 8021
FS_PASSWORD = "cluecon"

WS_HOST = "0.0.0.0"
WS_PORT = 8765

connected_browsers = set()

# This is still None until a real audio stream is connected.
fs_audio_writer = None


async def send_esl_dial_command(destination):
    global fs_audio_writer

    try:
        print(f"Connecting to FreeSWITCH {FS_HOST}:{FS_PORT}")

        reader, writer = await asyncio.open_connection(FS_HOST, FS_PORT)

        await reader.readuntil(b"\n\n")

        writer.write(f"auth {FS_PASSWORD}\n\n".encode())
        await writer.drain()

        auth = await reader.readuntil(b"\n\n")

        if b"+OK" not in auth:
            print("Authentication failed")
            writer.close()
            await writer.wait_closed()
            return False

        print("Authenticated")

        dial_command = (
            f"api originate "
            f"sofia/gateway/vikash/{destination} "
            f"&park()\n\n"
        )

        print(dial_command)

        writer.write(dial_command.encode())
        await writer.drain()

        response = await reader.readuntil(b"\n\n")

        print(response.decode())

        writer.close()
        await writer.wait_closed()

        return True

    except Exception as e:
        print("ESL Error:", e)
        return False


async def handle_browser(websocket):
    global fs_audio_writer

    print("Browser Connected")

    connected_browsers.add(websocket)

    try:
        async for message in websocket:

            if isinstance(message, bytes):

                if (
                    fs_audio_writer is not None
                    and not fs_audio_writer.is_closing()
                ):
                    fs_audio_writer.write(message)
                    await fs_audio_writer.drain()

            elif isinstance(message, str):

                try:
                    data = json.loads(message)

                    if data.get("action") == "originate_call":

                        destination = data.get("destination")

                        asyncio.create_task(
                            send_esl_dial_command(destination)
                        )

                except json.JSONDecodeError:
                    pass

    except websockets.ConnectionClosed:
        print("Browser disconnected")

    finally:
        connected_browsers.remove(websocket)


async def main():

    print(f"WebSocket listening on ws://{WS_HOST}:{WS_PORT}")

    async with websockets.serve(handle_browser, WS_HOST, WS_PORT):
        await asyncio.Future()


if __name__ == "__main__":
    asyncio.run(main())