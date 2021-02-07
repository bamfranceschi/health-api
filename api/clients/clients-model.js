const db = require("../../database/dbConfig");

//find by Id

const findById = (id) => {
  return db("clients").where({ id }).first();
};
//findall

const findAll = () => {
  return db("clients");
};
//addNew

const addNew = (client) => {
  return db("clients").insert(client);
};
//update

const updateClient = (id, changes) => {
  return db("clients").where({ id }).update(changes);
};
//remove

const removeClient = (id) => {
  return db("clients").where({ id }).del();
};

//vendorInfo

//need return all vendors, grouped by inputs and outputs categories, order lists by schedule
const vendorInfo = (clientId) => {
  return (
    db("vendors")
      .join("relationships", "vendors.id", "relationships.vendor_id")
      .select("vendors.name", "vendors.direction", "vendors.schedule")
      .where("relationships.client_id", "=", clientId)
      // .groupBy("schedule")
      .orderBy("schedule")
  );
};

//add new vendor relationship

const addVendor = (relationship) => {
  return db("relationships").insert(relationship);
};

//remove vendor relationship- expects relationship id

const removeVendor = ({ clientId, vendorId }) => {
  return db("relationships")
    .where({ client_id: clientId, vendor_id: vendorId })
    .del();
};

module.exports = {
  findById,
  findAll,
  addNew,
  updateClient,
  removeClient,
  vendorInfo,
  addVendor,
  removeVendor,
};
