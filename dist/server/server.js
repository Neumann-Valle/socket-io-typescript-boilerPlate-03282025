"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const PORT = 3000;
const httpServer = (0, http_1.createServer)();
const io = new socket_io_1.Server(httpServer, {
/* options */
});
io.on('connection', (socket) => {
    console.log('a socket client has connected');
});
httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
