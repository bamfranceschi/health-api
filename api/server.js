const express = require("express");
const server = express();

const clientRouter = require("./clients/clients-router");
const vendorRouter = require("./vendors/vendors-router");

//global middleware
server.use(express.json());
server.use("/client", clientRouter);
server.use("/vendor", vendorRouter);

// server.get("/", (req, res) => {
//   res.send("Hello from Express");
// });

server.listen(8080, () =>
  console.log("Server running on http://localhost:8080")
);

module.exports = server;
