import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for the Login Page
 * URL: https://the-internet.herokuapp.com/login
 */
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    // Using id selectors as they are stable and reliable for this page
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
    this.pageHeading = page.locator('h2');
  }

  /**
   * Navigate to the login page
   */
  async goto(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/login');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Fill the username field
   * @param username - The username to enter
   */
  async fillUsername(username: string): Promise<void> {
    try {
      await this.usernameInput.waitFor({ state: 'visible', timeout: 5000 });
      await this.usernameInput.clear();
      await this.usernameInput.fill(username);
    } catch (error) {
      throw new Error(`Failed to fill username: ${error}`);
    }
  }

  /**
   * Fill the password field
   * @param password - The password to enter
   */
  async fillPassword(password: string): Promise<void> {
    try {
      await this.passwordInput.waitFor({ state: 'visible', timeout: 5000 });
      await this.passwordInput.clear();
      await this.passwordInput.fill(password);
    } catch (error) {
      throw new Error(`Failed to fill password: ${error}`);
    }
  }

  /**
   * Click the login button
   */
  async clickLogin(): Promise<void> {
    try {
      await this.loginButton.waitFor({ state: 'visible', timeout: 5000 });
      await this.loginButton.click();
    } catch (error) {
      throw new Error(`Failed to click login button: ${error}`);
    }
  }

  /**
   * Perform complete login action
   * @param username - The username to enter
   * @param password - The password to enter
   */
  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  /**
   * Get the flash message text
   * @returns The text content of the flash message
   */
  async getFlashMessage(): Promise<string> {
    try {
      await this.flashMessage.waitFor({ state: 'visible', timeout: 5000 });
      return await this.flashMessage.textContent() || '';
    } catch (error) {
      throw new Error(`Failed to get flash message: ${error}`);
    }
  }

  /**
   * Check if flash message is visible
   * @returns True if flash message is visible, false otherwise
   */
  async isFlashMessageVisible(): Promise<boolean> {
    try {
      await this.flashMessage.waitFor({ state: 'visible', timeout: 2000 });
      return await this.flashMessage.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * Verify that flash message contains expected text
   * @param expectedText - The expected text to verify
   */
  async verifyFlashMessage(expectedText: string): Promise<void> {
    const message = await this.getFlashMessage();
    expect(message).toContain(expectedText);
  }

  /**
   * Verify that flash message indicates success
   */
  async verifyLoginSuccess(): Promise<void> {
    await this.verifyFlashMessage('You logged into a secure area!');
  }

  /**
   * Verify that flash message indicates failure
   */
  async verifyLoginFailure(): Promise<void> {
    await this.verifyFlashMessage('Your username is invalid!');
  }

  /**
   * Check if username field is visible and enabled
   * @returns True if username field is visible and enabled
   */
  async isUsernameFieldEnabled(): Promise<boolean> {
    return await this.usernameInput.isVisible() && await this.usernameInput.isEnabled();
  }

  /**
   * Check if password field is visible and enabled
   * @returns True if password field is visible and enabled
   */
  async isPasswordFieldEnabled(): Promise<boolean> {
    return await this.passwordInput.isVisible() && await this.passwordInput.isEnabled();
  }

  /**
   * Check if login button is visible and enabled
   * @returns True if login button is visible and enabled
   */
  async isLoginButtonEnabled(): Promise<boolean> {
    return await this.loginButton.isVisible() && await this.loginButton.isEnabled();
  }

  /**
   * Get the current URL of the page
   * @returns The current URL
   */
  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  /**
   * Verify that the page has loaded correctly
   */
  async verifyPageLoaded(): Promise<void> {
    await expect(this.pageHeading).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }
}
