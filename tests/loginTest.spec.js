const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage.spec");
const config = require("../config");

test.describe("Login Page Test Cases", () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto(`${config.baseUrl}`);
        await loginPage.gotoLoginPage();
    });

    test("Should login successfully with valid email and password", async ({ page }) => {
        await loginPage.login("admin@email.com", "test12345");
        await expect(page.locator("h1")).toHaveText("Cari Lowongan Kerja Pakai Dealls #LebihPasti");
    });

    test("Should show error with invalid email", async ({ page }) => {
        await loginPage.login("invalid@email.com", "test12345");
        const errorMessage = page.locator(".ant-message-error");
        await errorMessage.waitFor();
        await expect(errorMessage).toBeVisible();
    });

    test("Should show error with invalid password", async ({ page }) => {
        await loginPage.login("admin@email.com", "test12345678");
        await expect(page.locator(".ant-message-error")).toBeVisible();
    });

    test("Should disable Sign In button when email is empty", async ({ page }) => {
        await loginPage.login("", "test12345");

        const errorMessage = page.locator(".ant-form-item-explain-error");
        await errorMessage.waitFor({ state: "visible" });

        await expect(errorMessage).toHaveText("Missing email");
    });

    test("Should disable Sign In button when password is empty", async ({ page }) => {
        await loginPage.login("admin@email.com", "");
        const errorMessage = page.locator(".ant-form-item-explain-error");
        await errorMessage.waitFor({ state: "visible" });

        await expect(errorMessage).toHaveText("Missing password");
    });

    test("Should disable Sign In button when email is invalid format", async ({ page }) => {
        await loginPage.login("admin", "test12345");

        const errorMessage = page.locator(".ant-form-item-explain-error");
        await errorMessage.waitFor({ state: "visible" });

        await expect(errorMessage).toHaveText("Invalid email format");
    });

    test("Should disable Sign In button when password is invalid format", async ({ page }) => {
        await loginPage.login("admin@email.com", "123");
        const errorMessage = page.locator(".ant-form-item-explain-error");
        await errorMessage.waitFor({ state: "visible" });

        await expect(errorMessage).toHaveText("Password must be at least 8 characters");
    });

    test("Should disable Sign In button when form is empty", async ({ page }) => {
        await loginPage.login("", "");

        await expect(page.locator(".ant-form-item-explain-error").nth(0)).toHaveText("Missing email");
        await expect(page.locator(".ant-form-item-explain-error").nth(1)).toHaveText("Missing password");
    });
});
