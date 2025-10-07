import type { UserPresenter } from "@domain/presenters/user.presenter";
import type { UserRepository } from "@domain/repositories/user.repository";

export class GetShuffledUsersUseCase {
	constructor(private userRepository: UserRepository) {}

	execute(presenter: UserPresenter): any {
		const users = this.userRepository.getUsers();
		const shuffledUsers = [...users].sort(() => Math.random() - 0.5);
		return presenter.present(shuffledUsers);
	}
}
