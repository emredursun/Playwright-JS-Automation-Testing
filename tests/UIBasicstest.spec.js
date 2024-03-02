const { test, expect } = require("@playwright/test");

test.only("Browser Context Playwrigth Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const userName = page.locator("#username");
  const password = page.locator("[type='password']");
  const checkBox = page.locator("[type='checkbox']");
  const signInBtn = page.locator("#signInBtn");
  const firstCard = page.locator(".card-body .card-title a").nth(0);
  const secondCard = page.locator(".card-body .card-title a").nth(1);
  const lastCard = page.locator(".card-body .card-title a").last();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());

  // css
  await userName.fill("rahulshetty");
  await password.fill("learning");
  await checkBox.check();
  await signInBtn.click();
  // wait until this locator shown up page
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
  // type - fill
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signInBtn.click();

  console.log(await firstCard.textContent());
  console.log(await secondCard.textContent());
  console.log(await lastCard.textContent());


});

test("Page Playwrigth Test", async ({ page }) => {
  await page.goto("https:www.google.com");
  // get title - assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
