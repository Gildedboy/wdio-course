// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe("Home", () => {
  it("Open URL & assert title", async () => {
    //open URL
    await browser.url("https://practice.automationbro.com/");

    // Assert title
    await expect(browser).toHaveTitle("Practice E-Commerce Site – Automation Bro");
  });

  it("Open About Page & assert URL", async () => {
    //Open About Page
    await browser.url("https://practice.automationbro.com/about/");

    // Assert URL
    await expect(browser).toHaveUrl("https://practice.automationbro.com/about/");
  });

  it("Click get started btn & assert url contains get-started text ", async () => {
    //Open Home Page
    await browser.url("https://practice.automationbro.com/");

    //Click get started button
    await $(`#get-started`).click();

    //assert url contains get-started text
    await expect(browser).toHaveUrlContaining("get-started");
  });

  it("Click Logo Button & assert URL does not contains #get-started text", async () => {
    //Open Home Page
    await browser.url("https://practice.automationbro.com/");

    //Click logo button

    await $(`//img[@alt="Practice E-Commerce Site"]`).click();

    //Check url does not contains get-started
    await expect(browser).not.toHaveUrlContaining("get-started");
  });
});
