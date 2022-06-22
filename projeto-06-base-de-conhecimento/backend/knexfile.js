// Update with your config settings.
const { db } = require("./.env");
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	client: "pg",
	connection: db,
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: "knex_migrations",
	},
};
