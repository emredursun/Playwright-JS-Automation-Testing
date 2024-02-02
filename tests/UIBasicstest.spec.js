const { test, expect } = require("@playwright/test");

test("Browser Context Playwrigth Test", async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    // css
    page.locator();


});

test("Page Playwrigth Test", async ({page})=>
{
    await page.goto("https:www.google.com");
    // get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});
