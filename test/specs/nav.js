describe("Navegation Menu", () => {
  it("Get the text of all menu items & assert them", async () => {
    await browser.url("/");

    const expectedLinks = ["Home", "About", "Shop", "Blog", "Contact", "My account"];

    const actualLinks = [];

    //accesing list items with chaining $ and $$
    // const navLinks = await $("#primary-menu").$$("li[id*=menu]");

    //accesing the $$ directly instead of chaining
    const navLinks = await $$("#primary-menu li[id*=menu]");

    //for loop for getting text of links and insert them into actualLinks
    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    await expect(actualLinks).toEqual(expectedLinks);
  });
});
