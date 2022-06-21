const config = require("../knexfile.js");
const knex = require("knex")(config);

knex.migrate.latest([config]); // nao eh muito interessante fazer a migration direto no codigo
module.exports = knex;
