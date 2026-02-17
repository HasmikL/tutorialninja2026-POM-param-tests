import{expect, Page} from '@playwright/test';

export class CurrencyPage {

    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    
    }

    async changeCurrentCurrency(currency:string){
        await this.page.getByRole('button', { name: '$ Currency' }).click();
        await this.page.getByRole('button', { name: currency }).click();


    }
    async expectProductCurrency(symbol:string){
        const price_usd_label = this.page.locator('.caption .price');
        const c = await price_usd_label.count()

        // Check the Products in USD

        for (let i = 0; i < c; i++) {
        await expect(price_usd_label.nth(i)).toContainText(symbol);

    }


}
}