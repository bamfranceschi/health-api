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
const vendorInputInfo = (client_id) => {
  return db("vendors")
    .join("relationships", "vendors.id", "relationships.vendor_id")
    .select("vendors.name", "vendors.direction", "vendors.schedule")
    .where(function () {
      this.where("vendors.direction", "=", "input").orWhere(
        "vendors.direction",
        "=",
        "both"
      );
    })
    .andWhere("relationships.client_id", "=", client_id)
    .orderBy("schedule");
};

const vendorOutputInfo = (client_id) => {
  return db("vendors")
    .join("relationships", "vendors.id", "relationships.vendor_id")
    .select("vendors.name", "vendors.direction", "vendors.schedule")
    .where(function () {
      this.where("vendors.direction", "=", "output").orWhere(
        "vendors.direction",
        "=",
        "both"
      );
    })
    .andWhere("relationships.client_id", "=", client_id)
    .orderBy("schedule");
};

//add new vendor relationship

const addVendor = (relationship) => {
  return db("relationships").insert(relationship);
};

//get a specific relationship
const getRelationship = (client_id, vendor_id) => {
  return db("relationships")
    .select("id")
    .where({
      client_id: client_id,
      vendor_id: vendor_id,
    })
    .first();
};

//remove vendor relationship- expects relationship id
const removeVendor = (id) => {
  return db("relationships").where({ id }).del();
};

module.exports = {
  findById,
  findAll,
  addNew,
  updateClient,
  removeClient,
  vendorInputInfo,
  vendorOutputInfo,
  addVendor,
  getRelationship,
  removeVendor,
};
