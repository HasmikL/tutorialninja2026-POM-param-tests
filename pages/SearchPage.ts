import { expect, Page } from '@playwright/test';

export class SearchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    
    async goToHomePage() {
        await this.page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
    }

   
    async searchFor(term: string) {
        await this.page.getByRole('textbox', { name: 'Search' }).fill(term);
        await this.page.locator('#search').getByRole('button').click();
    }

   
    async expectProductsContain(term: string) {
        const products = await this.page.locator('.caption h4').allTextContents();
        console.log(products); // for debug

        products.forEach(product => {
            expect(product.toLowerCase()).toContain(term.toLowerCase());
        });
    }

   
    async expectNoProducts() {
        await expect(this.page.getByText('There is no product that')).toBeVisible();
    }
}

