const router = require("express").Router();

const vendorModel = require("./vendors-model.js");

//get all vendors
router.get("/", (req, res) => {
  vendorModel
    .findAll()
    .then((e) => {
      res.status(200).json(e);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Error retrieving all vendors", error: error });
    });
});

//get specific vendor
router.get("/:id", (req, res) => {
  const vendor_id = req.params.id;

  vendorModel
    .findById(vendor_id)
    .then((vendor) => {
      res.status(200).json(vendor);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Error retrieving specified vendor", error: error });
    });
});

//create new vendor
router.post("/", (req, res) => {
  const newVendor = req.body;

  vendorModel
    .addNew(newVendor)
    .then(() => {
      res.status(201).json({ message: "The new vendor has been created" });
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error creating a new vendor",
        error: error,
      });
    });
});

//update existing vendor info
router.put("/:id", (req, res) => {
  const vendor_id = req.params.id;
  const changes = req.body;

  vendorModel
    .updateVendor(vendor_id, changes)
    .then(() => {
      res.status(200).json({ message: "vendor information was updated" });
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error updating vendor information",
        error: error,
      });
    });
});

//delete vendor
router.delete("/:id", (req, res) => {
  const vendor_id = req.params.id;

  vendorModel
    .removeVendor(vendor_id)
    .then(() => {
      res
        .status(200)
        .json({ message: "vendor successfully deleted", vendor_id: vendor_id });
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error deleting specified vendor",
        error: error,
      });
    });
});

//get # of unique employees served for given vendor

router.get("/:id/all-emps", (req, res) => {
  const vendor_id = req.params.id;

  vendorModel
    .allEmps(vendor_id)
    .then((emps) => {
      let sum = 0;
      emps.map((e) => {
        sum = sum + e.emp_count;
      });

      res.status(200).json(sum);
    })
    .catch((error) => {
      res.status(500).json({
        message:
          "There was an error retrieving number of unique employees for specified vendor",
        error: error,
      });
    });
});

//get delivery schedule for all clients for a given vendor

router.get("/:id/schedules", (req, res) => {
  const vendor_id = req.params.id;

  vendorModel
    .getSchedules(vendor_id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        message:
          "There was an error retrieving delivery schedules for specified vendor",
        error: error,
      });
    });
});

module.exports = router;
