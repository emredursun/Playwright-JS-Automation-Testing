const { test, expect } = require("@playwright/test");

test("Browser Context Playwrigth Test", async ({ page }) => {

  const userName= page.locator("#userEmail");
  const userPassword= page.locator("#userPassword");
  const loginBtn = page.locator("[value='Login']");

  await page.goto("https://rahulshettyacademy.com/client");
  await userName.fill("anshika@gmail.com");
  await userPassword.fill("Iamking@000");
  await loginBtn.click();
  await page.waitForLoadState('networkidle');


  const adidasCard = page.locator(".card-body [style*='uppercase']").nth(1);
  const allTitles = page.locator(".card-body b");

  console.log(await adidasCard.textContent());
  await expect(adidasCard).toContainText("ADIDAS ORIGINAL");
  console.log(await allTitles.allTextContents());

  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles); 


});
