exports.seed = function (knex) {
  return knex("vendors").then(function () {
    // Inserts seed entries
    return knex("vendors").insert([
      { id: 1, name: "Awesome Aces", direction: "both", schedule: "daily" },
      { id: 2, name: "Brooding Bros", direction: "input", schedule: "weekly" },
      {
        id: 3,
        name: "Crooning Cows",
        direction: "output",
        schedule: "monthly",
      },
      { id: 4, name: "Dastardly Dudes", direction: "both", schedule: "daily" },
    ]);
  });
};
