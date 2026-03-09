const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test('inventário deve carregar produtos após login @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.acessarLogin();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await expect(loginPage.inventoryItems).toHaveCount(6);
});
