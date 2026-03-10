const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const users = require('../../fixtures/users.json');

test('login com sucesso @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.acessarLogin();
  await loginPage.realizarLogin(
    users.validUser.username,
    users.validUser.password
  );

  await expect(page).toHaveURL(/inventory/);
  await expect(loginPage.title).toHaveText('Products');
});
