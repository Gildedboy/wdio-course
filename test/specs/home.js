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
    await expect(browser).toHaveUrl("https://practice.automationbro.com/about/ ");
  });
});
