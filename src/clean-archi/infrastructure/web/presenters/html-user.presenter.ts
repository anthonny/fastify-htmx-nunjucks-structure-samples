import type { User } from "@domain/entities/user.entity";
import type { UserPresenter } from "@domain/presenters/user.presenter";
import nunjucks from "nunjucks";

const presentationBase = "clean-archi/infrastructure/web/views";
const usersPresentationBase = `${presentationBase}/users`;

export class HtmlUserPresenter implements UserPresenter {
	private templatePath: string;

	constructor(templatePath: "full" | "partial") {
		this.templatePath =
			templatePath === "full"
				? `${usersPresentationBase}/index.njk`
				: `${usersPresentationBase}/partials/users.njk`;
	}

	present(users: User[]): string {
		if (this.templatePath.includes("index.njk")) {
			return nunjucks.render(this.templatePath, {
				parentLayout: `${presentationBase}/layout.njk`,
				users,
			});
		}
		return nunjucks.render(this.templatePath, { users });
	}
}
