import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for the Demo Web Shop home page
 * URL: https://demowebshop.tricentis.com/
 */
export default class DemoWebShopHomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productItems: Locator;
  readonly firstProductTitle: Locator;
  readonly cartQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[name="q"]');
    this.searchButton = page.locator('input[type="submit"][value="Search"]');
    this.productItems = page.locator('.product-item');
    this.firstProductTitle = page.locator('.product-item .product-title a').first();
    this.cartQuantity = page.locator('span.cart-qty');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://demowebshop.tricentis.com/', { waitUntil: 'domcontentloaded' });
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/Demo Web Shop/);
    await expect(this.searchInput).toBeVisible();
    await expect(this.cartQuantity).toBeVisible();
  }

  async searchFor(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      this.searchButton.click(),
    ]);
  }

  async verifySearchResults(): Promise<void> {
    await expect(this.productItems.first()).toBeVisible();
  }

  async openFirstProduct(): Promise<void> {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      this.firstProductTitle.click(),
    ]);
  }

  async getCartQuantity(): Promise<string> {
    return (await this.cartQuantity.textContent())?.trim() || '';
  }
}
