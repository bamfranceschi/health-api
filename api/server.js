const express = require("express");
const server = express();

const clientRouter = require("./clients/clients-router");

//global middleware
server.use(express.json());
server.use("/client", clientRouter);

// server.get("/", (req, res) => {
//   res.send("Hello from Express");
// });

server.listen(8080, () =>
  console.log("Server running on http://localhost:8080")
);

module.exports = server;
