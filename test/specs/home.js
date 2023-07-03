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

  //hard way to get text, this is more useful if I need to manipulate the text
  // it("Find heading element & assert the text - hard way", async () => {
  //   //Open Home Page
  //   await browser.url("https://practice.automationbro.com/");

  //   //Find heading element
  //   const headingEl = await $(`.elementor-widget-container h1`);

  //   //get text of the element
  //   const headingText = await headingEl.getText();

  //   //Assert the text
  //   await expect(headingText).toEqual("Think different. Make different.");
  // });

  // //easier way to get text, in this example its not required to assign the text to a constant variable, instead we use the "toHaveText" assertion, this is more useful when we only need/want to assert the text
  it("Find heading element & assert the text - easy way", async () => {
    //Open Home Page
    await browser.url("https://practice.automationbro.com/");

    //Find heading element
    const headingEl = await $(`.elementor-widget-container h1`);

    //Assert the text
    await expect(headingEl).toHaveText("Think different. Make different.");
  });
  //built in webdriverio assertions have retry & wait capabilities, if I try to use toEqual that is a jest assertion <-- will only assert once; instead if i use toHaveText, it will retry a lot of times
});
