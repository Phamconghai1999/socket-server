// var fs = require("fs");
var http = require("http");
var https = require("https");
// var privateKey = fs.readFileSync("SSL/localhost.key", "utf8");
// var certificate = fs.readFileSync("SSL/localhost.crt", "utf8");
// var credentials = { key: privateKey, cert: certificate };

//=============================================================================
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const server = http.createServer(app);
const io = require("socket.io")(server);
io.on("connect", (socket) => {
  console.log("client connected");

  socket.on("event", (data) => {
    console.log(data);
  });
  socket.on("disconnect", () => {
    /* … */
  });
});

app.use(cors());
app.use(express.static(__dirname + "/public"));

server.listen(process.env.PORT || port, () =>
  console.log(`App listening on port ${process.env.PORT || port}!`)
);
