const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const users = require('../../fixtures/users.json');

test('login inválido deve exibir mensagem de erro @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.acessarLogin();
  await loginPage.realizarLogin(
    users.invalidUser.username,
    users.invalidUser.password
  );

  await expect(loginPage.errorMessage).toBeVisible();
});
