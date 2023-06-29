describe("Blog", () => {
  it("should get the list of recent posts and assert the text lenght of each item should be > than 10 characters + total rows should be = 5", async () => {
    //Open Blog Page
    await browser.url("/blog");

    //get recent post and assign it to a variable
    const recentPosts = await $$(`//section[@id="recent-posts-3"]/ul/li`);

    //for loop trought the list, getting the text and assert that each post is greater than 10
    for (const post of recentPosts) {
      const postText = await post.getText();
      await expect(postText.length).toBeGreaterThan(10);
    }

    //assert the length of the recentPosts array
    await expect(recentPosts).toHaveLength(5);
  });
});
