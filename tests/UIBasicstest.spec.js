const { test, expect } = require("@playwright/test");

test("Browser Context Playwrigth Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  // css
  await page.locator("#username").fill("rahulshetty");
  await page.locator("[type='password']").fill("learning");
  await page.locator("[type='checkbox']").check();
  await page.locator("#signInBtn").click();
});

test("Page Playwrigth Test", async ({ page }) => {
  await page.goto("https:www.google.com");
  // get title - assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
