class MentoringPage {
    constructor(page) {
        this.page = page;
        this.mentoringNavButton = page.locator("//a[contains(text(),'Mentoring')]");
        this.mentorCards = page.locator("a[class*='MentorCard']");
        this.goalSettingButton = page.locator(
            "//*[@id='book-session-form']/form/div/div[2]/div/div/div[2]/div/div/ul/li[1]/button"
        );
        this.nextButton = page.locator('button:has-text("Selanjutnya")');
        this.dateButton = page.locator("div.ProposeDateRange_propose_date_range__OxdCX button:has(svg)");
        this.pickerButton = page.locator(".rmdp-day-picker");
        this.locationButton = page.locator(".ant-select-selector");
        this.checkbox = page.locator(".ant-checkbox-input");
        this.notes = page.locator("#notes");
        this.submitButton = page.locator("#mentoring-schedule-finish-request-session-btn");
        this.lihatDetailButton = page.locator("button:has-text('Lihat Detailnya')");
    }

    async gotoMentoringPage() {
        await this.mentoringNavButton.click();
    }

    async gotoMentorPage(startTime, endTime) {
        await this.mentorCards.first().waitFor();
        const mentorCount = await this.mentorCards.count();
        const randomIndex = Math.floor(Math.random() * mentorCount);
        await this.mentorCards.nth(randomIndex).click();

        await this.page.waitForTimeout(1000);

        const ajukanJadwalButton = this.page.locator("button:has-text('Ajukan Jadwal')");
        const exploreOtherMentorButton = this.page.locator("button:has-text('Explore Other Mentor')");
        const lihatSemuaMentorButton = this.page.locator("button:has-text('Lihat Semua Mentor')");

        if ((await ajukanJadwalButton.count()) > 0) {
            await ajukanJadwalButton.click();
            await this.goalSettingButton.nth(0).click();
            await this.nextButton.click();
            await this.dateButton.click();

            const items = this.page.locator("div.rmdp-day:not(.rmdp-disabled)");
            await items.first().waitFor();
            await items.nth(0).click();
            await items.nth(6).click();
            await this.dateButton.click();

            await this.page.locator("#proposedTimes_0_startTime").fill(startTime);
            await this.page.locator("#proposedTimes_0_endTime").fill(endTime);

            const locationSelect = this.page.locator(".propose-location-select");
            const isDisabled = (await locationSelect.getAttribute("class")).includes("ant-select-disabled");

            if (!isDisabled) {
                await locationSelect.click();
                await this.page.locator(".ant-checkbox-input").nth(0).check();
                await locationSelect.click();
            }

            await this.notes.fill(
                "I would like to discuss automation testing and how it helps improve the efficiency and accuracy of software testing processes."
            );
            await this.nextButton.click();
            await this.checkbox.nth(0).check();
            await this.checkbox.nth(1).check();
            await this.submitButton.click();
            await this.lihatDetailButton.click();
            return true;
        } else if ((await exploreOtherMentorButton.count()) > 0) {
            await exploreOtherMentorButton.click();
            return false;
        } else if ((await lihatSemuaMentorButton.count()) > 0) {
            await lihatSemuaMentorButton.click();
            return false;
        }
    }
}

module.exports = { MentoringPage };
