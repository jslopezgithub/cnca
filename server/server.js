/* eslint-disable no-console */
import http from "http";

import app from "./app";

const port = parseInt(process.env.PORT || "3000");

app.use((err, req, res, next) => {
	if (res.headersSent) {
		return next(err);
	}
	console.error(err);
	res.sendStatus(500);
});

const server = http.createServer(app);

server.listen(port);

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	console.log(`Listening on ${bind}`);
});
