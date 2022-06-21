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

	app.route("/categories")
		// GET
		.get(app.api.category.get)
		// POST
		.post(app.api.category.save);

	// Cuidado com ordem! Tem que vir antes de /categories/:id
	app.route("/categories/tree").get(app.api.category.getTree);

	app.route("/categories/:id")
		// GET
		.get(app.api.category.getById)
		// PUT
		.put(app.api.category.save)
		// REMOVE
		.delete(app.api.category.remove);
};
