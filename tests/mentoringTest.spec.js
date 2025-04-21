const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage.spec");
const config = require("../config");
const { MentoringPage } = require("../pages/mentoringPage.spec");

test.describe("Login Page Test Cases", () => {
    let loginPage;
    let mentoringPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto(`${config.baseUrl}`);
        await loginPage.gotoLoginPage();

        await loginPage.login("admin@emails.com", "test12345");

        mentoringPage = new MentoringPage(page);
        await mentoringPage.gotoMentoringPage();
    });

    test("Should successfully booking available mentor", async ({ page }) => {
        const isMentorBooked = await mentoringPage.gotoMentorPage("12:00", "12:45");

        expect(isMentorBooked, "Booking gagal karena mentor penuh").toBe(true);
        await expect(page).toHaveURL(/mentoring/);
    });
});
