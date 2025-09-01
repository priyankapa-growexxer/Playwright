const {test, expect} = require('@playwright/test');

test.only ('browser context topic Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#userName');
    const password = page.locator('[name="password"]');
    const submit = page.locator('[type="submit"]');


    await page.goto("https://stgappcockpit.parkstreet.com/");
    console.log(await page.title());

    //await username.fill("nserafin");
    //await password.fill("P@rkstr33t1000");
    //await submit.click();
    //console.log(await page.locator('[class="typography-paragraph-white-regular col-md-8 mx-auto text-center u-pg-mb-3 validation-msg ng-star-inserted"]').textContent());
    await username.fill("nserafini");
    await password.fill("P@rkstr33t1000");
    await submit.click();
    await page.waitForLoadState('networkidle');
    //await page.waitForResponse(response => response.url().includes('login') && response.status() === 200);
    await page.locator('a.menutoggle').click();
    //await page.getByRole('link', { name: /compliance/i }).click();
    //await page.getByRole('link', { name: /colas/i }).click();
    await page.getByRole('link', { name: ' Compliance ' }).click();
    await page.getByRole('link', { name: 'COLAs' }).click();
    await page.getByRole('button', { name: ' Add New COLA' }).click();
    await page.getByText('Select Supplier').click();
    await page.locator('a').filter({ hasText: 'Sips' }).click();
    await page.getByRole('textbox', { name: 'Enter Brand' }).click();
    await page.getByRole('textbox', { name: 'Enter Brand' }).fill('brand p3');
    await page.getByRole('textbox', { name: 'Enter Brand' }).click();
    await page.getByRole('textbox', { name: 'Enter Label Description' }).click();
    await page.getByRole('textbox', { name: 'Enter Label Description' }).fill('test');
    await page.getByText('AA Test', { exact: true }).click();
    await page.getByText('Select Product type').click();
    await page.locator('a').filter({ hasText: 'Distilled Spirit' }).click();
    await page.locator('.fa-plus-circle').click
    await page.locator('input[type="file"]').setInputFiles('C:\\Users\\Growlt-279\\OneDrive - Growexx\\Pictures\\Screenshot 2025-04-01 171725.png');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.pause();
    //await getByText('Saved Successfully!').click();


    await page.goto('https://stgcockpit.parkstreet.com/router.php/app#!/cockpit/cola-summary');

    
    






    

    
    
    
    
   







});
test('page Playwright test', async ({page})=>
{
    
    await page.goto("https://stgappcockpit.parkstreet.com/");

    console.log(await page.title());
    await expect(page).toHaveTitle("Cockpit");


});