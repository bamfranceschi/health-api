const server = require("./api/server.js");

const port = process.env.PORT || 8080;

server.listen(8080, () => console.log(`\n** Running on port ${port} **\n`));
