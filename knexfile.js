// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/health.db3",
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    useNullAsDefault: true,
  },

  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  //NICE TO HAVE: host production on heroku

  // production: {
  //   client: "pg",
  //   connection: process.env.DATABASE_URL,
  //   migrations: {
  //     directory: "./database/migrations",
  //   },
  //   seeds: {
  //     directory: "./database/seeds",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  // },
};
