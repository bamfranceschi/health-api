exports.seed = function (knex) {
  return knex("relationships").then(function () {
    // Inserts seed entries
    return knex("relationships").insert([
      { id: 1, client_id: 1, vendor_id: 2 },
      { id: 2, client_id: 1, vendor_id: 4 },
      { id: 3, client_id: 2, vendor_id: 1 },
      { id: 4, client_id: 2, vendor_id: 3 },
      { id: 5, client_id: 2, vendor_id: 4 },
      { id: 6, client_id: 3, vendor_id: 1 },
      { id: 7, client_id: 3, vendor_id: 2 },
      { id: 8, client_id: 3, vendor_id: 3 },
      { id: 9, client_id: 3, vendor_id: 4 },
      { id: 10, client_id: 4, vendor_id: 2 },
    ]);
  });
};
