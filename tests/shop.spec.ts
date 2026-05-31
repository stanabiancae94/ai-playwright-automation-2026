import { test, expect } from '@playwright/test';
import DemoWebShopHomePage from '../pages/DemoWebShopHomePage';
import DemoWebShopProductPage from '../pages/DemoWebShopProductPage';

test.describe('Demo Web Shop', () => {
  let homePage: DemoWebShopHomePage;
  let productPage: DemoWebShopProductPage;

  test.beforeEach(async ({ page }) => {
    homePage = new DemoWebShopHomePage(page);
    productPage = new DemoWebShopProductPage(page);
    await homePage.goto();
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({ path: testInfo.outputPath('failure.png'), fullPage: true });
    }
  });

  test('should load the homepage and display the search bar', async () => {
    await homePage.verifyPageLoaded();
  });

  test('should search for products and show search results', async () => {
    await homePage.searchFor('computer');
    await homePage.verifySearchResults();
  });

  test('should open the first search result product details page', async () => {
    await homePage.searchFor('computer');
    await homePage.openFirstProduct();
    await productPage.verifyProductPageLoaded('Build your own cheap computer');
  });

  test('should add a product to the cart from product details', async () => {
    await homePage.searchFor('computer');
    await homePage.openFirstProduct();
    await productPage.verifyProductPageLoaded('Build your own cheap computer');
    await productPage.addToCart();
    await productPage.verifyCartQuantity('(1)');
  });
});
