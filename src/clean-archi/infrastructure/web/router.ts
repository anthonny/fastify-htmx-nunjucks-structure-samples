import type { FastifyInstance } from "fastify";
import { InMemoryUserDataSource } from "@infrastructure/data-sources/user.data-source";
import { GetShuffledUsersUseCase } from "@use-cases/get-shuffled-users.use-case";
import { UserController } from "./controllers/user.controller";

export const router = (fastify: FastifyInstance) => {
	// Dependency injection
	const userDataSource = new InMemoryUserDataSource();
	const getShuffledUsersUseCase = new GetShuffledUsersUseCase(userDataSource);
	const userController = new UserController(getShuffledUsersUseCase);

	fastify.get("/users", (request, reply) =>
		userController.getUsers(request, reply),
	);

	fastify.get("/users/shuffle", (request, reply) =>
		userController.shuffleUsers(request, reply),
	);
};
