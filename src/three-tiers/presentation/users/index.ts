import nunjucks from "nunjucks";

const presentationBase = "three-tiers/presentation";
const usersPresentationBase = `${presentationBase}/users`;

export const renderUsersPage = (users: any) => {
	return nunjucks.render(`${usersPresentationBase}/index.njk`, {
		parentLayout: `${presentationBase}/layout.njk`,
		users,
	});
};

export const renderUsers = (users: any) => {
	return nunjucks.render(`${usersPresentationBase}/partials/users.njk`, {
		users,
	});
};
