const { test, expect } = require('@playwright/test');

test('inventário deve carregar produtos após login @regression', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('.inventory_item')).toHaveCount(6);
});
