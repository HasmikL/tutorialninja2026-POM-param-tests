import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { CurrencyPage } from '../pages/Currency.Page';

let basePage: BasePage;
let currencyPage: CurrencyPage;

test.beforeEach(async({page})=>{
    basePage = new BasePage(page);
    currencyPage = new CurrencyPage(page);
    await basePage.open();
});

test.skip( ({browserName})=> browserName === 'webkit', 'Skipping wibkit on Windows');

test.describe('CURRECY', ()=>{

    test('USD Dollar $', async({page})=>{
        await currencyPage.changeCurrentCurrency('$US Dollar');    
        await currencyPage.expectProductCurrency('$');
    });

    test('EURO €', async({page})=>{
        await currencyPage.changeCurrentCurrency('€Euro');  
        await currencyPage.expectProductCurrency('€');        
    });

    test('POUND STERLING £', async({page})=>{
        await currencyPage.changeCurrentCurrency('£Pound Sterling'); 
        await currencyPage.expectProductCurrency('£'); 
    });

});