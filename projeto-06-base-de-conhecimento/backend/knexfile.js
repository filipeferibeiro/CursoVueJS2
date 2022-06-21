// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	client: "pg",
	connection: {
		host: "127.0.0.1",
		port: "5432",
		database: "knowledge",
		user: "postgres",
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: "knex_migrations",
	},
};
