import{test,expect} from '@playwright/test';
import {BasePage} from '../pages/BasePage';
import {MenuPage} from '../pages/MenuPage';


let basePage: BasePage;
let menuPage: MenuPage;


test.beforeEach(async({page})=>{
    basePage = new BasePage(page);
    menuPage = new MenuPage(page);

    await basePage.open();
});

test.skip(({browserName})=> browserName == 'webkit', 'Skip webit');



test.describe('Desktop Test',()=>{


  const positiveTerms = [
    {name: 'Test PC', menu: 'Desktops', submenu: 'PC (0)', title: 'PC', url: 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20_26', heading: 'PC'},
    {name: 'Mac Test', menu: 'Desktops', submenu: 'Mac (1)', title: 'Mac', url: 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27', heading: 'Mac'},
    {name: 'ShowAllDesktops Test', menu: 'Desktops', submenu: 'Show AllDesktops', title: 'Desktops', url: 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20', heading: 'Desktops'},
  ];


  test('Test PC',async({page})=>{

    await menuPage.openCategoryFromMenu('Desktops', 'PC (0)');
    
    await menuPage.expectTitleandUrl('PC', 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20_26');
   
    await menuPage.expectHeadingVisible('PC');

    //await menuPage.expectEmptyProduct(); 

    for(let term of positiveTerms){

         test(term.name, async({page})=>{
          await menuPage.openCategoryFromMenu(term.menu, term.submenu);
    
          await menuPage.expectTitleandUrl(term.title, term.url);
   
          await menuPage.expectHeadingVisible(term.heading);
            
        });
     
    }

  });



  test( 'Mac Test', async({page})=>{

      await menuPage.openCategoryFromMenu('Desktops', 'Mac (1)');

      await menuPage.expectTitleandUrl('Mac', 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27');
      
      await menuPage.expectHeadingVisible('Mac');

      for(let term of positiveTerms){

         test(term.name, async({page})=>{
          await menuPage.openCategoryFromMenu(term.menu, term.submenu);
    
          await menuPage.expectTitleandUrl(term.title, term.url);
   
          await menuPage.expectHeadingVisible(term.heading);
            
        });
     
    }

      

  });

  test('ShowAllDesktops Test',async({page})=>{
    
      await menuPage.openCategoryFromMenu('Desktops', 'Show AllDesktops');

      await menuPage.expectTitleandUrl('Desktops', 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20');

      await menuPage.expectHeadingVisible('Desktops');   

      for(let term of positiveTerms){

         test(term.name, async({page})=>{
          await menuPage.openCategoryFromMenu(term.menu, term.submenu);
    
          await menuPage.expectTitleandUrl(term.title, term.url);
   
          await menuPage.expectHeadingVisible(term.heading);
            
        });
     
    }
  });
});




// test.describe('Laptops & Notebooks',()=>{
    
//     test('Macs Test',async({page})=>{

//       await page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).hover();
//       await page.getByRole('link', { name: 'Macs (0)' }).click();


//       await expect(page).toHaveTitle('Macs');
//       await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=18_46');


//       await expect(page.getByRole('heading', { name: 'Macs' })).toBeVisible();
    
//       await expect(page.getByText('There are no products to list')).toBeVisible();
//       await page.getByRole('link', { name: 'Continue' }).click();
//       await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
//       await expect(page).toHaveTitle('Your Store');
//   });

//   test('Windows',async({page})=>{

//     await page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).hover();
//     await page.getByRole('link', { name: 'Windows (0)' }).click();
    
//     await expect(page).toHaveTitle('Windows');
//     await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=18_45');
    

//     await expect(page.getByRole('heading', { name: 'Windows' })).toBeVisible();

//     await expect(page.getByText('There are no products to list')).toBeVisible();
//     await page.getByRole('link', { name: 'Continue' }).click();
//     await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
//     await expect(page).toHaveTitle('Your Store'); 
//   });



//   test('Show All Laptops & NoteBooks',async({page})=>{

//     await page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).hover();
//     await page.getByRole('link', { name: 'Show AllLaptops & Notebooks' }).click();


//     await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=18');
//     await expect(page).toHaveTitle('Laptops & Notebooks');
  

//     await expect(page.getByRole('heading', { name: 'Laptops & Notebooks' })).toBeVisible();
//   });

// });



// // HOMEWORK 
// test.describe('Component Test',()=>{
    
//     test('Mice and Trackballs Test',async({page})=>{
//       await page.getByRole('link', { name: 'Components', exact: true }).hover();
//       await page.getByRole('link', { name: 'Mice and Trackballs (0)' }).click();

//       await expect(page.getByRole('heading', { name: 'Mice and Trackballs' })).toBeVisible();
//       await expect(page.getByText('There are no products to list')).toBeVisible();
      
//       await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25_29');
//       await expect(page).toHaveTitle('Mice and Trackballs');
//       await page.getByRole('link', { name: 'Continue' }).click();
//       await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
//       await expect(page).toHaveTitle('Your Store');

//  });


//     test('Monitors Test',async({page})=>{
        
//   await page.getByRole('link', { name: 'Components', exact: true }).hover();
//   await page.getByRole('link', { name: 'Monitors (2)' }).click();
//   await expect(page.getByRole('heading', { name: 'Monitors' })).toBeVisible();
//   await expect(page.getByText('Showing 1 to 2 of 2 (1 Pages)')).toBeVisible(); 
//   await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25_28');
//   await expect(page).toHaveTitle('Monitors');

// });

//     test('Printers Test',async({page})=>{

//   await page.getByRole('link', { name: 'Components', exact: true }).hover();
//   await page.getByRole('link', { name: 'Printers (0)' }).click();
//   await expect(page.getByRole('heading', { name: 'Printers' })).toBeVisible;
//   await expect(page.getByText('There are no products to list')).toBeVisible();
//   await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25_30');
//   await expect(page).toHaveTitle('Printers');
//   await page.getByRole('link', { name: 'Continue' }).click();
//   await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
//   await expect(page).toHaveTitle('Your Store');

// });

// test('Scanners Test',async({page})=>{

//   await page.getByRole('link', { name: 'Components', exact: true }).hover();
//   await page.getByRole('link', { name: 'Scanners (0)' }).click();
//   await expect(page.getByRole('heading', { name: 'Scanners' })).toBeVisible;
//   await expect(page.getByText('There are no products to list')).toBeVisible();
//   await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25_31');
//   await expect(page).toHaveTitle('Scanners');
//   await page.getByRole('link', { name: 'Continue' }).click();
//   await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
//   await expect(page).toHaveTitle('Your Store');

// });

// test('Web Cameras Test',async({page})=>{

//   await page.getByRole('link', { name: 'Components', exact: true }).hover();
//   await page.getByRole('link', { name: 'Web Cameras (0)' }).click();
//   await expect(page.getByRole('heading', { name: 'Scanners' })).toBeVisible;
//   await expect(page.getByText('There are no products to list')).toBeVisible();
//   await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25_32');
//   await expect(page).toHaveTitle('Web Cameras');
//   await page.getByRole('link', { name: 'Continue' }).click();
//   await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
//   await expect(page).toHaveTitle('Your Store');

// });

// test('ShowAll Component Test',async({page})=>{
   
//   await page.getByRole('link', { name: 'Components', exact: true }).hover();
//   await page.getByRole('link', { name: 'Show AllComponents' }).click();
//   await expect(page.getByRole('heading', { name: 'Components' })).toBeVisible();
//   await expect(page.getByRole('heading', { name: 'Refine Search' })).toBeVisible();
//   await expect(page.locator('body')).toContainText(
//     'Mice and Trackballs (0) Monitors (2) Printers (0) Scanners (0) Web Cameras (0)'
//   );
//   await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25');
//   await expect(page).toHaveTitle('Components');

// });

// });

