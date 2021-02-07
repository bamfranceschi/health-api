exports.up = function (knex) {
  return knex.schema
    .createTable("vendors", function (table) {
      table.increments("id");
      table.string("name").notNullable();
      table.string("direction").notNullable();
      table
        .enu("schedule", ["daily", "weekly", "monthly"], {
          useNative: true,
          enumName: "schedule-type",
        })
        .notNullable();
    })
    .createTable("clients", function (table) {
      table.increments("id");
      table.string("name").notNullable();
      table.integer("emp_count").notNullable().unsigned();
    })
    .createTable("relationships", function (table) {
      table.increments("id");
      table
        .integer("client_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("clients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("vendor_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("vendors")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("vendors")
    .dropTableIfExists("clients")
    .dropTableIfExists("relationships");
};
