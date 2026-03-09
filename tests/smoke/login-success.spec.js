const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test('login com sucesso @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.acessarLogin();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  await expect(loginPage.title).toHaveText('Products');
});
