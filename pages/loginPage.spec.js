class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginNavButton = page.locator("#dealls-navbar-login-btn");
        this.email = page.locator("#basic_email");
        this.password = page.locator("#basic_password");
        this.signInButton = page.locator("button[type='submit']");
    }

    async gotoLoginPage() {
        await this.loginNavButton.click();
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
    }

    async fillEmail(email) {
        await this.email.fill(email);
    }

    async fillPassword(password) {
        await this.password.fill(password);
    }
}

module.exports = { LoginPage };
