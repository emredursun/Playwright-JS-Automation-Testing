const { test, expect } = require("@playwright/test");

test.only("Browser Context Playwrigth Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  // css
  await page.locator("#username").fill("rahulshetty");
  await page.locator("[type='password']").fill("learning");
  await page.locator("[type='checkbox']").check();
  await page.locator("#signInBtn").click();
  // wait until this locator shown up page
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
});

test("Page Playwrigth Test", async ({ page }) => {
  await page.goto("https:www.google.com");
  // get title - assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
