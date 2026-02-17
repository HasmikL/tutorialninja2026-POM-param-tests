import { test, expect } from '@playwright/test';
import { BasePage } from '../../tutorialninja_2026_POM/pages/BasePage';
import { TopSliderPage } from '../pages/TopSliderPage';

let basePage: BasePage;
let topSliderPage: TopSliderPage;

test.beforeEach(async ({ page }) => {
  basePage = new BasePage(page);
  topSliderPage = new TopSliderPage(page);
});

test.describe('Top Slider', () => {

    test('Next slider', async () => {
  await basePage.open();
  await topSliderPage.nextButton();
});

    test('Prev Button Testing', async () => {
    await basePage.open();
    await topSliderPage.prevButton();

    });


});
