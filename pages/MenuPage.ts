import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from "./BasePage";

export class MenuPage{

    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    
    }

    async openCategoryFromMenu(menu: string, submenu: string){
        await this.page.getByRole('link', { name: menu, exact: true }).hover();
        await this.page.getByRole('link', { name: submenu }).click();

    }
    async expectTitleandUrl(title:string, url: string){
        await expect(this.page).toHaveURL(url);
        await expect(this.page).toHaveTitle(title);

    }

     
    async expectHeadingVisible(heading: string){
    await expect(this.page.getByRole('heading', { name: heading, exact: true })).toBeVisible();
}

    
    async expectEmptyProduct(){
        await expect(this.page.getByText('There are no products to list')).toBeVisible();
        await this.page.getByRole('link', { name: 'Continue' }).click();
        await expect(this.page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
        await expect(this.page).toHaveTitle('Your Store');
    }

    
}

