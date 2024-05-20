const { test, expect } = require("@playwright/test");

test("Browser Context Playwrigth Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const userName = page.locator("#username");
  const password = page.locator("[type='password']");
  const checkBox = page.locator("[type='checkbox']");
  const signInBtn = page.locator("#signInBtn");
  const firstCard = page.locator(".card-body .card-title a").nth(0);
  const secondCard = page.locator(".card-body .card-title a").nth(1);
  const lastCard = page.locator(".card-body .card-title a").last();
  const allCards = page.locator(".card-body .card-title a");

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
  console.log(await allCards.allTextContents());


});

test("Page Playwrigth Test", async ({ page }) => {
  await page.goto("https:www.google.com");
  // get title - assertion
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});


test("UI Controls", async ({page})=>{
  const userName = page.locator("#username");
  const password = page.locator("[type='password']");
  const userCheckBox = page.locator(".radiotextsty").nth("1");
  const signInBtn = page.locator("#signInBtn");
  const dropdownElement = page.locator("select.form-control");
  const okayBtn = page.locator("#okayBtn");
  const termsAndConditionCheckBox = page.locator("#terms");
  const blinkingTextLink = page.locator("[href*='documents-request']");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await userName.fill("rahulshetty");
  await password.fill("learning");
  await userCheckBox.click();
  await okayBtn.click();
  expect(userCheckBox).toBeChecked();
  // console.log(await userCheckBox.isChecked());
  await dropdownElement.selectOption("Consultant");
  await termsAndConditionCheckBox.click();
  expect(termsAndConditionCheckBox).toBeChecked();
  await termsAndConditionCheckBox.uncheck();
  expect(await termsAndConditionCheckBox.isChecked()).toBeFalsy();
  await signInBtn.click();
  await expect(blinkingTextLink).toHaveAttribute('class', 'blinkingText');

    // await page.pause();
});

test("Child windows handling", async ({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const blinkingTextLink = page.locator("[href*='documents-request']");
  
  const [newPage] = await Promise.all(
    [
      context.waitForEvent('page'), // Listen for any new page pending, rejected, fulfilled
      blinkingTextLink.click(), // New page is opened
    ])   
  
  const text = await newPage.locator(".red").textContent();
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  console.log(domain);

  await page.locator("#username").fill(domain);
  // await page.pause();
  console.log(await page.locator("#username").textContent());
  

});


// npx playwright codegen http://google.com
test('Using Codegen tool to record & Playback with generated automation script', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Alles accepteren' }).click();
  await page.getByLabel('Zoek', { exact: true }).click();
  await page.getByLabel('Zoek', { exact: true }).fill('Apple');
  await page.getByLabel('Google Zoeken').first().click();
  await page.getByRole('link', { name: 'Apple (Nederland) Apple https' }).click();
  await page.getByLabel('Mac', { exact: true }).click();
});




