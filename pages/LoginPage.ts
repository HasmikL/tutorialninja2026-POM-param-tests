import { expect, Page } from '@playwright/test';

export class LoginPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openLoginPage() {
        await this.page.getByRole('link', { name: ' My Account' }).click();
        await this.page.getByRole('link', { name: 'Login' }).click();
}

  async login(email: string, password: string) {
        await this.page.getByRole("textbox", { name: "E-Mail Address" }).fill(email);
        await this.page.getByRole("textbox", { name: "Password" }).fill(password);
        await this.page.getByRole("button", { name: "Login" }).click();
    }
  async submitLogin() {
        await this.page.getByRole("button", { name: "Login" }).click();
        await expect(this.page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/logout');
        await expect(this.page).toHaveTitle('Account Logout');
}

  async expectAccount(){
     await expect(this.page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
     await expect(this.page).toHaveTitle('My Account');
  }


  async expectWarningMessage(){
    await expect(this.page.locator('.alert.alert-danger')).toContainText('Warning');

}
}
