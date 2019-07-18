const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
io.on("connection", socket => {
console.log("New connection !!!", socket.id);
   socket.on("OnOff", state => {
    LedOnOff(state);
  });
});

server.listen(PORT, () => console.log("Connected @ 127.0.0.1:" + PORT));
