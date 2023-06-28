describe("Blog", () => {
  it("should get the list of recent posts and assert the text lenght of each item should be > than 10 characters + total rows should be = 5", async () => {
    //Open Blog Page
    await browser.url("/blog");

    //an empty array that will be used in a loop to insert the text
    const actualPosts = [];

    //get recent post and assign it to a variable
    const recentPosts = await $$(`//section[@id="recent-posts-3"]/ul/li`);

    //for loop for inserting the text of each li item in an actualPosts array
    for (const post of recentPosts) {
      actualPosts.push(await post.getText());
    }

    //assert the length of the actualPosts array
    await expect(actualPosts).toHaveLength(5);

    //assert that each post is bigger than 10
    for (const index of actualPosts) {
      await expect(index.length).toBeGreaterThan(10);
    }
  });
});
