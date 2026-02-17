import { test, expect } from '@playwright/test';
import {BasePage} from '../pages/BasePage';
import {CurrencyPage} from '../pages/Currency.Page';


let basePage: BasePage;
let currencyPage: CurrencyPage;

test.beforeEach(async({page})=>{

   basePage = new BasePage(page);
   currencyPage = new CurrencyPage(page);
 
   await basePage.open();

});


test.skip( ({browserName})=> browserName === 'webkit', 'Skipping wibkit on Windows');

test.describe('Currency', ()=>{

     const positiveTerms = [
        {name: 'USD Dollar $', currency: '$US Dollar', symbol: '$'},
        {name: 'Euro €', currency: '€Euro', symbol: '€'},
        {name: 'Pound Sterling £', currency: '£Pound Sterling', symbol: '£'}
     ];

     for(let term of positiveTerms){

         test(term.name, async({page})=>{
            await currencyPage.changeCurrentCurrency(term.currency);
            await currencyPage.expectProductCurrency(term.symbol);
        });
     
    }

});
