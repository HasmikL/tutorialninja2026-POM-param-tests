import{expect, Locator, Page} from '@playwright/test';


export class BasePage {

readonly page: Page

    constructor(page:Page){
        this.page =  page;
    }


    async open(){
    
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=common/home', { waitUntil: 'networkidle' });
    await expect(this.page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
    await expect(this.page).toHaveTitle('Your Store');
}
    
    }
