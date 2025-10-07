import type { User } from "@domain/entities/user.entity";
import type { UserRepository } from "@domain/repositories/user.repository";

const users: User[] = [
	{ name: "Jean", lastname: "Dupont", city: "Paris" },
	{ name: "Marie", lastname: "Martin", city: "Lyon" },
	{ name: "Pierre", lastname: "Bernard", city: "Marseille" },
	{ name: "Sophie", lastname: "Dubois", city: "Toulouse" },
	{ name: "Luc", lastname: "Thomas", city: "Nice" },
	{ name: "Claire", lastname: "Robert", city: "Nantes" },
	{ name: "Antoine", lastname: "Richard", city: "Strasbourg" },
	{ name: "Emma", lastname: "Petit", city: "Bordeaux" },
	{ name: "Paul", lastname: "Durand", city: "Lille" },
	{ name: "Julie", lastname: "Leroy", city: "Rennes" },
];

export class InMemoryUserDataSource implements UserRepository {
	getUsers(): User[] {
		return users;
	}
}
