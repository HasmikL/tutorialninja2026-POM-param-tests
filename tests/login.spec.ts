import { test, expect } from '@playwright/test';
import { LoginPage } from '../../tutorialninja_2026_POM/pages/LoginPage';

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
  { name: 'Valid email + invalid password', email: 'hasmik.levonyan07@gmail.com', password: 'ynwydbdftba' },
  { name: 'Invalid email + valid password', email: 'hasmik.hasmik@gmail.com', password: 'bGmDBYJU@EgA8b' },
  { name: 'Invalid email + invalid password', email: 'hasmik.hasmik@gmail.com', password: 'bGmDBYJU@EgA8bbbbb' },
  { name: 'Empty email + empty password', email: '', password: '' },
  { name: 'Empty email + filled password', email: '', password: 'bGmDBYJU@EgA8b' },
  { name: 'Filled email + empty password', email: 'hasmik.levonyan07@gmail.com', password: '' },
  { name: 'Invalid email format', email: 'hasmik.hasmik@gmail,com', password: 'bGmDBYJU@EgA8b' },
  { name: 'Email with spaces', email: 'hasmik.levonyan 07@gmail.com', password: 'bGmDBYJU@EgA8b' }
];


  test('Valid email and invalid password', async ({ page }) => {

    // ------ Navigate to Login page ------
    await loginPage.openLoginPage();

    // ------ Enter valid email + invalid password + Submit login ------
    await loginPage.login('hasmik.levonyan07@gmail.com', 'ynwydbdftba');

    // ------ Verify warning message is shown ------
    await loginPage.expectWarningMessage();
  });

  test('Invalid email and valid password', async ({ page }) => {

    // ------ Navigate to Login page ------
    await loginPage.openLoginPage();

    // ------ Enter invalid email + valid password + Submit login ------
    await loginPage.login('hasmik.hasmik@gmail.com', 'bGmDBYJU@EgA8b');

    // ------ Verify warning alert is shown ------
    await loginPage.expectWarningMessage();
  });

  test('Invalid email and invalid password', async ({ page }) => {

    // ------ Navigate to Login page ------
    await loginPage.openLoginPage();

    // ------ Enter invalid email + invalid password + Submit login ------
    await loginPage.login('hasmik.hasmik@gmail.com', 'bGmDBYJU@EgA8bbbbb');

    // ------ Verify warning alert is shown ------
    await loginPage.expectWarningMessage();
  });

  test('Empty email and empty password', async ({ page }) => {

    // ------ Navigate to Login page ------
    await loginPage.openLoginPage();

    // ------ Attempt login with empty credentials ------
    await loginPage.login('', '');

    // ------ Verify warning message is shown ------
    await loginPage.expectWarningMessage();
  });

  test('Empty email and filled password', async ({ page }) => {

    // ------ Navigate to Login page ------
    await loginPage.openLoginPage();

    // ------ Enter password only (email left empty) ------
    await loginPage.login('', 'bGmDBYJU@EgA8b');

    // ------ Verify warning message is shown ------
    await loginPage.expectWarningMessage();
  });

  test('Filled email and empty password', async ({ page }) => {

    // ------ Navigate to Login page ------
    await loginPage.openLoginPage();

    // ------ Enter email only (password left empty) ------
    await loginPage.login('hasmik.levonyan07@gmail.com', '');

    // ------ Verify warning message is shown ------
    await loginPage.expectWarningMessage();
  });

  test('Invalid email format', async ({ page }) => {

    // ------ Navigate to Login page ------
    await loginPage.openLoginPage();

    // ------ Enter malformed email + valid password ------
    await loginPage.login('hasmik.hasmik@gmail,com', 'bGmDBYJU@EgA8b');

    // ------ Verify warning alert is shown ------
    await loginPage.expectWarningMessage();
  });

  test('Email with leading and trailing spaces', async ({ page }) => {

    // ------ Navigate to Login page ------
    await loginPage.openLoginPage();

    // ------ Enter email containing whitespace + valid password ------
    await loginPage.login('hasmik.levonyan 07@gmail.com', 'bGmDBYJU@EgA8b');

    // ------ Verify warning alert is shown ------
    await loginPage.expectWarningMessage();
  });

});
