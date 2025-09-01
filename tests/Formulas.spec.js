import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stgappcockpit.parkstreet.com/login');
  await page.locator('#userName').fill("jlubin");
  await page.locator('[name="password"]').fill("P@rkstr33t1000");
  await page.locator('.btn-primary').click();
  await page.waitForLoadState('networkidle');
  await page.locator('a.menutoggle').click();

 await page.getByRole('link', { name: ' Compliance ' }).click();
  await page.getByRole('link', { name: 'Formulas' }).click();
  await page.getByRole('button', { name: ' FORMULA' }).click();
  await page.getByRole('textbox', { name: 'Select Supplier' }).click();
  await page.locator('div').filter({ hasText: /^0\.2 Sips$/ }).click();
  await page.getByRole('textbox', { name: 'Enter Formula Description' }).click();
  await page.getByRole('textbox', { name: 'Enter Formula Description' }).fill('formula cockpit 1807251');
  await page.getByRole('textbox', { name: 'Select Status' }).click();
  await page.locator('div').filter({ hasText: /^Cancelled$/ }).click();
  await page.getByRole('textbox', { name: 'Select Product Type' }).click();
  await page.getByText('Spirits').click();
  await page.getByRole('textbox', { name: 'Select Classification' }).click();
  await page.getByText('A Blend Of Straight Corn').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('rowgroup').filter({ hasText: '4102 4102 0.2 Sips 0.2 Sips' }).click({
    
  });
});