
import { test } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test.skip(({ browserName }) => browserName === 'webkit', 'Skip webit');

test.describe('Search Tests @search', () => {

    const positiveTerms = ['mac', 'iphone'];
    const negativeTerms = ['@macccccc', '123', 'kflwowl', '!!!!', 'banana', ''];

    let searchPage: SearchPage;

    test.beforeEach(async ({ page }) => {
        searchPage = new SearchPage(page);    
        await searchPage.goToHomePage();      

    });


    for (const term of positiveTerms) {
        test(`Search for ${term}`, async ({ page }) => {
            await searchPage.searchFor(term);
            await searchPage.expectProductsContain(term);
        });
    }

   
    for (const term of negativeTerms) {
        test(`Search for ${term}`, async ({ page }) => {
            await searchPage.searchFor(term);
            await searchPage.expectNoProducts();
        });
    }

});


