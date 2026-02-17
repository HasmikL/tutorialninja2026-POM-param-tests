import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
  loginPage = new LoginPage(page);
});

test.skip(({ browserName }) => browserName === 'webkit', 'Skipping wibkit on Windows');

test.describe('LOGIN', () => {

  test('Login with valid email and valid password', async ({ page }) => {

    // ------ Navigate to Login page ------
    await loginPage.openLoginPage();

    // ------ Fill in valid credentials + Submit login ------
    await loginPage.login('hasmik.levonyan07@gmail.com', 'bGmDBYJU@EgA8b');

    // ------ Verify successful login landing page ------
    await loginPage.expectAccount();

    // Logout after successful login 
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.locator('#top-links').getByRole('link', { name: 'Logout' }).click();

    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/logout');
    await expect(page).toHaveTitle('Account Logout');
  });

  test('User remains logged in after refreshing the page', async ({ page }) => {

    // ------ Navigate to Login page ------
    await loginPage.openLoginPage();

    // ------ Fill in valid credentials + Submit login ------
    await loginPage.login('hasmik.levonyan07@gmail.com', 'bGmDBYJU@EgA8b');

    // ------ Reload the page (session persistence check) ------
    await page.reload();

    // ------ Verify user is still on My Account page ------
    await loginPage.expectAccount();
  });


const negativeTerms = [
  { name: 'Valid email and invalid password', email: 'hasmik.levonyan07@gmail.com', password: 'ynwydbdftba' },
  { name: 'Invalid email and valid password', email: 'hasmik.hasmik@gmail.com', password: 'bGmDBYJU@EgA8b' },
  { name: 'Invalid email and invalid password', email: 'hasmik.hasmik@gmail.com', password: 'bGmDBYJU@EgA8bbbbb' },
  { name: 'Empty email and empty password', email: '', password: '' },
  { name: 'Empty email and filled password', email: '', password: 'bGmDBYJU@EgA8b' },
  { name: 'Filled email and empty password', email: 'hasmik.levonyan07@gmail.com', password: '' },
  { name: 'Invalid email format', email: 'hasmik.hasmik@gmail,com', password: 'bGmDBYJU@EgA8b' },
  { name: 'Email with leading and trailing spaces', email: 'hasmik.levonyan 07@gmail.com', password: 'bGmDBYJU@EgA8b' }
];

test.describe('Negative login scenarios', () => {

  for (let term of negativeTerms) {

    test(term.name, async ({ page }) => {

      // ------ Navigate to Login page ------
      await loginPage.openLoginPage();

      // ------ Enter email + password + Submit login ------
      await loginPage.login(term.email, term.password);

      // ------ Verify warning message is shown ------
      await loginPage.expectWarningMessage();

    });

  }

});
});
