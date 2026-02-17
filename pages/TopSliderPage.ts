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
    if (await this.page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()) {
      await this.page.locator('.swiper-button-next').first().click();
      await expect(this.page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
    } else {
      await this.page.locator('.swiper-button-next').first().click();
      await expect(this.page.getByRole('img', { name: 'iPhone' }).nth(1)).toBeVisible();
    }
  }

  async prevButton() {
    await this.page.locator('.swiper-button-prev').first().click();
    await expect(this.page.getByRole('link', { name: 'iPhone' }).first()).toBeVisible();
  }

}