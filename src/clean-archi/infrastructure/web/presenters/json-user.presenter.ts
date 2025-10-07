import type { User } from "@domain/entities/user.entity";
import type { UserPresenter } from "@domain/presenters/user.presenter";

export class JsonUserPresenter implements UserPresenter {
	present(users: User[]): User[] {
		return users;
	}
}
