import type { User } from "../entities/user.entity";

export interface UserRepository {
	getUsers(): User[];
}
