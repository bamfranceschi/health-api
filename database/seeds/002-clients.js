exports.seed = function (knex) {
  return knex("clients").then(function () {
    // Inserts seed entries
    return knex("clients").insert([
      { id: 1, name: "Erudite Earl", emp_count: 40 },
      { id: 2, name: "Frugal Fran", emp_count: 100 },
      { id: 3, name: "Gullible Gus", emp_count: 1000 },
      { id: 4, name: "Harrumphing Harold", emp_count: 50 },
    ]);
  });
};
