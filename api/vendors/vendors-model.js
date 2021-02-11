const db = require("../../database/dbConfig");

//find by Id

const findById = (id) => {
  return db("vendors").where({ id }).first();
};
//findall

const findAll = () => {
  return db("vendors");
};
//addNew

const addNew = (vendor) => {
  return db("vendors").insert(vendor);
};
//update

const updateVendor = (id, changes) => {
  return db("vendors").where({ id }).update(changes);
};
//remove

const removeVendor = (id) => {
  return db("vendors").where({ id }).del();
};

//given vendor, return delivery schedules for vendor Clients

const getSchedules = (vendor_id) => {
  return db("vendors")
    .join("relationships", "vendors.id", "relationships.vendor_id")
    .join("clients", "relationships.client_id", "clients.id")
    .select("clients.name", "vendors.schedule")
    .where("relationships.vendor_id", "=", vendor_id);
};

//given vendor, return total emp for all clients

const allEmps = (vendor_id) => {
  return db("clients")
    .join("relationships", "clients.id", "relationships.client_id")
    .select("clients.emp_count")
    .where("relationships.vendor_id", "=", vendor_id);
};

module.exports = {
  findById,
  findAll,
  addNew,
  updateVendor,
  removeVendor,
  allEmps,
  getSchedules,
};
