import type { FastifyInstance } from "fastify";
import { getShuffleUsers } from "../logic/users.logic";
import { renderUsers, renderUsersPage } from "./users";

export const router = (fastify: FastifyInstance) => {
	fastify.get("/users", (request, reply) => {
		const users = getShuffleUsers();
		if (request.headers.accept === "application/json") {
			return users;
		} else {
			try {
				reply
					.header("content-type", "text/html; charset=utf-8")
					.send(renderUsersPage(users));
			} catch (e) {
				console.log(e);
				// @ts-expect-errors
				return e.message;
			}
		}
	});

	fastify.get("/users/shuffle", (request, reply) => {
		const users = getShuffleUsers();
		try {
			reply
				.header("content-type", "text/html; charset=utf-8")
				.send(renderUsers(users));
		} catch (e) {
			console.log(e);
			// @ts-expect-errors
			return e.message;
		}
	});
};
