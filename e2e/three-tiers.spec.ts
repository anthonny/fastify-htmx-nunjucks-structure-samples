import { test, expect } from "@playwright/test";

test.describe("Three-tiers architecture", () => {
	test("should display users page with initial users list", async ({ page }) => {
		await page.goto("/three-tiers/users");

		// Check if the page loaded
		await expect(page.locator("body")).toBeVisible();

		// Check if shuffle button is present
		const shuffleButton = page.locator(
			'button:has-text("Shuffle users")',
		);
		await expect(shuffleButton).toBeVisible();

		// Check if users list is present
		const usersList = page.locator("#users");
		await expect(usersList).toBeVisible();
	});

	test("should shuffle users when clicking the button", async ({ page }) => {
		await page.goto("/three-tiers/users");

		// Get initial users list order
		const usersList = page.locator("#users tr");
		const initialOrder = await usersList.allTextContents();

		// Click shuffle button
		const shuffleButton = page.locator(
			'button:has-text("Shuffle users")',
		);
		await shuffleButton.click();

		// Wait for the HTMX request to complete
		await page.waitForTimeout(500);

		// Get new users list order
		const newOrder = await usersList.allTextContents();

		// Verify the order has changed
		expect(newOrder).toHaveLength(initialOrder.length);
		expect(newOrder).not.toEqual(initialOrder);
	});

	test("should return JSON when Accept header is application/json", async ({
		request,
	}) => {
		const response = await request.get("/three-tiers/users", {
			headers: {
				Accept: "application/json",
			},
		});

		expect(response.ok()).toBeTruthy();
		expect(response.headers()["content-type"]).toContain(
			"application/json",
		);

		const users = await response.json();
		expect(Array.isArray(users)).toBeTruthy();
		expect(users.length).toBeGreaterThan(0);
	});
});
