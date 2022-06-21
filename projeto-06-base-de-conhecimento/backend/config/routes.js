module.exports = (app) => {
	app.route("/users")
		// GET
		.get(app.api.user.get)
		// POST
		.post(app.api.user.save);
	app.route("/users/:id")
		// GET
		.get(app.api.user.getById)
		// PUT
		.put(app.api.user.save);
};
