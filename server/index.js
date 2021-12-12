const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const app = express();
const PORT = 9000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(socket);
  console.log("new W.S connection estabilished");
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("joined room : ", data);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("recieve_message", data);
  });
  socket.on("disconnect", () =>
    console.log("socket disconnected at", socket.id)
  );
});
server.listen(PORT, () => console.log("sucessfully listening to port "));
