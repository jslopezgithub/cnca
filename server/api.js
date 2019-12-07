import { Router } from "express";

import { getClient } from "./db";

const api = new Router();

api.get("/", (_, res, next) => {
	const client = getClient();

	client.connect((err) => {
		if (err) {
			return next(err);
		}
		res.json({ message: "Hello, Heroku!" });
		client.close();
	});
});

export default api;
