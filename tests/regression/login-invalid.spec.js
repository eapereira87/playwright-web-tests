const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test('login inválido deve exibir mensagem de erro @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.acessarLogin();
  await loginPage.realizarLogin('standard_user', 'senha_invalida');

  await expect(loginPage.errorMessage).toBeVisible();
});
