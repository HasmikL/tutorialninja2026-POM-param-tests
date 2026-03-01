import { test, expect } from '@playwright/test';
import { BasePage } from '../../tutorialninja_2026_POM/pages/BasePage';
import { MenuPage } from '../../tutorialninja_2026_POM/pages/MenuPage';

let basePage: BasePage;
let menuPage: MenuPage;

test.beforeEach(async ({ page }) => {
  basePage = new BasePage(page);
  menuPage = new MenuPage(page);

  await basePage.open();
});

test.skip(({browserName})=> browserName == 'webkit', 'Skip webit');

test.describe.only('Desktop Test @menu',()=>{

test('Test PC @menu',async({page})=>{

 await menuPage.openCategoryFromMenu('Desktops','PC (0)');

 await menuPage.expectTitleandUrl('PC','https://tutorialsninja.com/demo/index.php?route=product/category&path=20_26');

 await menuPage.expectHeadingVisible('PC');

 await menuPage.expectEmptyProduct();

});

test( 'Mac Test @menu', async({page})=>{

  await menuPage.openCategoryFromMenu('Desktops','Mac (1)');
  await menuPage.expectTitleandUrl('Mac','https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27')
  await menuPage.expectHeadingVisible('Mac');
    
});

test('ShowAllDesktops Test @menu',async({page})=>{

  await menuPage.openCategoryFromMenu('Desktops','Show AllDesktops');
  await menuPage.expectTitleandUrl('Desktops','https://tutorialsninja.com/demo/index.php?route=product/category&path=20')
  await menuPage.expectHeadingVisible('Desktops');

});
});

test.describe('Laptops & Notebooks @menu',()=>{
    
    test('Macs Test @menu',async({page})=>{

      await menuPage.openCategoryFromMenu('Laptops & Notebooks','Macs (0)');
      await menuPage.expectTitleandUrl('Macs','https://tutorialsninja.com/demo/index.php?route=product/category&path=18_46');
      await menuPage.expectHeadingVisible('Macs');
      await menuPage.expectEmptyProduct();

});


test('Windows @menu',async({page})=>{

  await menuPage.openCategoryFromMenu('Laptops & Notebooks','Windows (0)');
  await menuPage.expectTitleandUrl('Windows','https://tutorialsninja.com/demo/index.php?route=product/category&path=18_45');
  await menuPage.expectHeadingVisible('Windows');
  await menuPage.expectEmptyProduct();
   
 
});

test('Show All Laptops & NoteBooks @menu',async({page})=>{
  await page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).hover();
  await page.getByRole('link', { name: 'Show AllLaptops & Notebooks' }).click();

  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=18');
  await expect(page).toHaveTitle('Laptops & Notebooks');

  await expect(page.getByRole('heading', { name: 'Laptops & Notebooks' })).toBeVisible();
  
 });
});


test.describe('Component Test @menu',()=>{
    
    test('Mice and Trackballs Test',async({page})=>{

      await menuPage.openCategoryFromMenu('Components','Mice and Trackballs (0)');
      await menuPage.expectTitleandUrl('Mice and Trackballs','https://tutorialsninja.com/demo/index.php?route=product/category&path=25_29');
      await menuPage.expectHeadingVisible('Mice and Trackballs');
      await menuPage.expectEmptyProduct();

 });


    test('Monitors Test',async({page})=>{

      await menuPage.openCategoryFromMenu('Components','Monitors (2)');
      await menuPage.expectTitleandUrl('Monitors','https://tutorialsninja.com/demo/index.php?route=product/category&path=25_28');
      await menuPage.expectHeadingVisible('heading') ;
 
});

    test('Printers Test',async({page})=>{

       await menuPage.openCategoryFromMenu('Components','Printers (0)');
       await menuPage.expectTitleandUrl('Printers','https://tutorialsninja.com/demo/index.php?route=product/category&path=25_30');
       await menuPage.expectHeadingVisible('Printers');
       await menuPage.expectEmptyProduct()
  
});

test('Scanners Test',async({page})=>{

      await menuPage.openCategoryFromMenu('Components','Scanners (0)');
      await menuPage.expectTitleandUrl('Scanners','https://tutorialsninja.com/demo/index.php?route=product/category&path=25_31');
      await menuPage.expectHeadingVisible('Scanners');
      await menuPage.expectEmptyProduct()
});

test('Web Cameras Test',async({page})=>{

  await menuPage.openCategoryFromMenu('Components','Web Cameras (0)');
  await menuPage.expectTitleandUrl('Web Cameras','https://tutorialsninja.com/demo/index.php?route=product/category&path=25_32');
  await menuPage.expectHeadingVisible('Web Cameras');
  await menuPage.expectEmptyProduct();

});

test('ShowAll Component Test',async({page})=>{

  await menuPage.openCategoryFromMenu('Components','Show AllComponents');
  await menuPage.expectTitleandUrl('Components','https://tutorialsninja.com/demo/index.php?route=product/category&path=25');
  await menuPage.expectHeadingVisible('Components');

});

});
