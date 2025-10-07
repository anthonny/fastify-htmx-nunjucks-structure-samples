import type { User } from "../entities/user.entity";

export interface UserPresenter {
	present(users: User[]): any;
}
