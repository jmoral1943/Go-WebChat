var socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb => {
  socket.onmessage = msg => {
    cb(msg);
  };
};

let sendMsg = msg => {
  socket.send(msg);
};

export { connect, sendMsg };
