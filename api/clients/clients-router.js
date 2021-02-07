const router = require("express").Router();

const clientModel = require("./clients-model.js");

//get all clients -this works
router.get("/", (req, res) => {
  clientModel
    .findAll()
    .then((e) => {
      res.status(200).json(e);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

//get specific client -working
router.get("/:id", (req, res) => {
  const clientId = req.params.id;

  clientModel
    .findById(clientId)
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

//create new client -working
router.post("/", (req, res) => {
  const newClient = req.body;

  clientModel
    .addNew(newClient)
    .then(() => {
      res.status(201).json({ message: "The new client has been created" });
    })
    .catch((error) => {
      res.status(500).json({ erorr: error });
    });
});

//update existing client info - working
router.put("/:id", (req, res) => {
  const clientId = req.params.id;
  const changes = req.body;

  clientModel
    .updateClient(clientId, changes)
    .then(() => {
      res.status(200).json({ message: "client information was updated" });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

//delete client - working
router.delete("/:id", (req, res) => {
  const clientId = req.params.id;

  clientModel
    .removeClient(clientId)
    .then(() => {
      res
        .status(200)
        .json({ message: "client successfully deleted", client_id: clientId });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

//for given client, list vendors in inputs and outputs, ordered by schedule

router.get("/:id/vendor-data", (req, res) => {
  const clientId = req.params.id;

  clientModel
    .vendorInfo(clientId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

//because it's from the client's perspective, assuming the client adds a new vendor via their admin portal, add and remove relationship functionality can be done here

module.exports = router;
