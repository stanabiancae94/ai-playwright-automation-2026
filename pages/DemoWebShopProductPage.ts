import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for a product detail page on Demo Web Shop
 */
export default class DemoWebShopProductPage {
  readonly page: Page;
  readonly productName: Locator;
  readonly addToCartButton: Locator;
  readonly cartQuantity: Locator;
  readonly notificationBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productName = page.locator('div.product-name h1');
    this.addToCartButton = page.locator("form#product-details-form input.button-1.add-to-cart-button");
    this.cartQuantity = page.locator('span.cart-qty');
    this.notificationBar = page.locator('div.bar-notification');
  }

  async verifyProductPageLoaded(expectedName: string): Promise<void> {
    await expect(this.productName).toHaveText(expectedName);
    await expect(this.addToCartButton).toBeVisible();
  }

  async addToCart(): Promise<void> {
    await Promise.all([
      this.page.waitForResponse(response => response.url().includes('/addproducttocart/details') && response.status() === 200),
      this.addToCartButton.click(),
    ]);
    await expect(this.notificationBar).toContainText('The product has been added to your shopping cart');
  }

  async verifyCartQuantity(expectedQuantity: string): Promise<void> {
    await expect(this.cartQuantity).toHaveText(expectedQuantity);
  }
}
