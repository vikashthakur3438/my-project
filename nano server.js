const WebSocket = require("ws");

const wss = new WebSocket.Server({
    host: "0.0.0.0",
    port: 8765
});

console.log("WebSocket server running on 8765");

wss.on("connection", (ws) => {

    console.log("FreeSWITCH connected");

    ws.on("message", (data) => {
        console.log("Received audio bytes:", data.length);
    });

    ws.on("close", () => {
        console.log("Disconnected");
    });

});