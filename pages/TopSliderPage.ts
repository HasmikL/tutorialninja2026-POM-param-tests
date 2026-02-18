import { expect, Page } from '@playwright/test';

export class TopSliderPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    
    async goToHomePage() {
        await this.page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
    }

    async nextButton() {
        await this.page.locator('.swiper-button-next').first().click();
    }

    async prevButton() {
        await this.page.locator('.swiper-button-prev').first().click();
    }
}