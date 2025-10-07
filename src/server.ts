import { router as cleanArchiRouter } from "@infrastructure/web/router";
import fastify from "fastify";
import nunjucks from "nunjucks";
import path from "path";
import { router as threeTiersRouter } from "./three-tiers/presentation/router";

nunjucks.configure(path.join(__dirname), { autoescape: true });
const server = fastify();

server.register(threeTiersRouter, { prefix: "/three-tiers" });
server.register(cleanArchiRouter, { prefix: "/clean-archi" });

server.get("/ping", async (request, reply) => {
	return "pong\n";
});

server.listen(
	{ port: 8080, host: process.env.HOST || "localhost" },
	(err, address) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		console.log(`Server listening at ${address}`);
	},
);
