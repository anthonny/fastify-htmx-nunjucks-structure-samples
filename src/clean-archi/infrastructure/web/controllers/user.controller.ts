import type { FastifyReply, FastifyRequest } from "fastify";
import type { GetShuffledUsersUseCase } from "@use-cases/get-shuffled-users.use-case";
import { HtmlUserPresenter } from "../presenters/html-user.presenter";
import { JsonUserPresenter } from "../presenters/json-user.presenter";

export class UserController {
	constructor(private getShuffledUsersUseCase: GetShuffledUsersUseCase) {}

	async getUsers(request: FastifyRequest, reply: FastifyReply) {
		if (request.headers.accept === "application/json") {
			const presenter = new JsonUserPresenter();
			return this.getShuffledUsersUseCase.execute(presenter);
		} else {
			try {
				const presenter = new HtmlUserPresenter("full");
				const html = this.getShuffledUsersUseCase.execute(presenter);
				reply.header("content-type", "text/html; charset=utf-8").send(html);
			} catch (e) {
				console.log(e);
				// @ts-expect-error
				return e.message;
			}
		}
	}

	async shuffleUsers(request: FastifyRequest, reply: FastifyReply) {
		try {
			const presenter = new HtmlUserPresenter("partial");
			const html = this.getShuffledUsersUseCase.execute(presenter);
			reply.header("content-type", "text/html; charset=utf-8").send(html);
		} catch (e) {
			console.log(e);
			// @ts-expect-error
			return e.message;
		}
	}
}
