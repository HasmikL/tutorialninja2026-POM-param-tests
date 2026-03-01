import { test, expect } from '@playwright/test';
import { BasePage } from '../../tutorialninja_2026_POM/pages/BasePage';
import { TopSliderPage } from '../pages/TopSliderPage';

let basePage: BasePage;
let topSliderPage: TopSliderPage;

test.beforeEach(async ({ page }) => {
  basePage = new BasePage(page);
  topSliderPage = new TopSliderPage(page);
});

test.describe.only('Top Slider @top_slider', () => {

  test('Next slider @top_slider', async ({ page }) => {
    await basePage.open();
    await topSliderPage.nextButton();

    // Expect the correct image after next
    if (await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()) {
      await expect(page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
    } else {
      await expect(page.getByRole('img', { name: 'iPhone' }).nth(1)).toBeVisible();
    }
  });

  test('Prev Button Testing @top_slider', async ({ page }) => {
    await basePage.open();
    await topSliderPage.prevButton();

    // Expect the correct image after prev
    await expect(page.getByRole('link', { name: 'iPhone' }).first()).toBeVisible();
  });

});
