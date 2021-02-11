const router = require("express").Router();
const clientModel = require("./clients-model.js");

//get all clients
router.get("/", (req, res) => {
  clientModel
    .findAll()
    .then((e) => {
      res.status(200).json(e);
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error retrieving all clients",
        error: error,
      });
    });
});

//get specific client
router.get("/:id", (req, res) => {
  const client_id = req.params.id;

  clientModel
    .findById(client_id)
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error retrieving specified client",
        error: error,
      });
    });
});

//create new client
router.post("/", (req, res) => {
  const newClient = req.body;

  clientModel
    .addNew(newClient)
    .then(() => {
      res.status(201).json({ message: "The new client has been created" });
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error creating new client",
        error: error,
      });
    });
});

//update existing client info
router.put("/:id", (req, res) => {
  const client_id = req.params.id;
  const changes = req.body;

  clientModel
    .updateClient(client_id, changes)
    .then(() => {
      res.status(200).json({ message: "client information was updated" });
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error updating specified client",
        error: error,
      });
    });
});

//delete client
router.delete("/:id", (req, res) => {
  const client_id = req.params.id;

  clientModel
    .removeClient(client_id)
    .then(() => {
      res
        .status(200)
        .json({ message: "client successfully deleted", client_id: client_id });
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error updating specified client",
        error: error,
      });
    });
});

//for given client, list vendors in inputs and outputs, ordered by schedule
//WORKING!! :D

router.get("/:id/vendor-data", async (req, res) => {
  const client_id = req.params.id;

  try {
    const inputVendors = await clientModel.vendorInputInfo(client_id);
    const outputVendors = await clientModel.vendorOutputInfo(client_id);

    const aggVendorInfo = {
      input: inputVendors,
      output: outputVendors,
    };
    return res.status(200).json(aggVendorInfo);
  } catch (error) {
    return res.status(500).json({
      message: "There was an error retrieving aggregated vendor information",
      error: error,
    });
  }
});

//because it's from the client's perspective, assuming the client adds a new vendor via their admin portal, add and remove relationship functionality is done here

router.post("/:id/add-vendor", (req, res) => {
  const client_id = req.params.id;
  const vendor_id = req.body.vendor_id;

  clientModel
    .addVendor({ client_id: client_id, vendor_id: vendor_id })
    .then(() => {
      res.status(201).json({ message: "new relationship successfully added" });
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error creating new client/vendor relationship",
        error: error,
      });
    });
});

router.delete("/:id/remove-vendor", async (req, res) => {
  const client_id = Number(req.params.id);
  const vendor_id = req.body.vendor_id;

  console.log(client_id, vendor_id);

  try {
    const relationship = await clientModel.getRelationship(
      client_id,
      vendor_id
    );
    console.log(relationship, "relationship_id");
    clientModel.removeVendor(relationship.id).then(() => {
      res.status(200).json({
        message: "successfully removed relationship",
        vendor_id: vendor_id,
        relationship_id: relationship,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "There was an error deleting specified vendor relationship",
      error: error,
    });
  }
});

module.exports = router;
