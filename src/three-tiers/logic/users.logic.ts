import { getUsers } from "../data/users.data";

export const getShuffleUsers = () => {
	const users = getUsers();
	return [...users].sort(() => Math.random() - 0.5);
};
