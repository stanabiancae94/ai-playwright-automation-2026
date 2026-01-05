import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page', () => {
  test('should display all login form elements', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.verifyPageLoaded();
    expect(await loginPage.isUsernameFieldEnabled()).toBe(true);
    expect(await loginPage.isPasswordFieldEnabled()).toBe(true);
    expect(await loginPage.isLoginButtonEnabled()).toBe(true);
  });

  test('should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await loginPage.verifyLoginSuccess();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invaliduser', 'invalidpass');
    await loginPage.verifyLoginFailure();
    expect(await loginPage.isFlashMessageVisible()).toBe(true);
  });

  test('should stay on login page after failed login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('wrong', 'wrong');
    const currentUrl = await loginPage.getCurrentUrl();
    expect(currentUrl).toContain('/login');
  });
});
