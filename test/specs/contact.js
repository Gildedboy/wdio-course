describe("Contact form", () => {
  it("should fill the form and assert the confirmation message", async () => {
    //go to contact page
    await browser.url("/contact");

    //get input elements with css id selectors
    const name = await $("#evf-277-field_ys0GeZISRs-1");
    const email = await $("#evf-277-field_LbH5NxasXM-2");
    const phone = await $("#evf-277-field_66FR384cge-3");
    const message = await $("#evf-277-field_yhGx3FOwr2-4");

    //a more direct approach to get the element  with the selector and input a value
    //Set Value will clear the field and then add the value; add value will only input the data without clearing before the input
    // await $("#evf-277-field_ys0GeZISRs-1").setValue("Omar Millan");
    // await $(".contact-name inpuit").addValue("Omar Millan")

    //set value to elements
    await name.setValue("Omar Millan");
    await email.setValue("knukles30@gmail.com");
    await phone.setValue("6692179643");
    await message.setValue("Hello World");

    //get button element and click
    await $(".everest-forms-submit-button").click();

    //get success message and get the text
    const successMessage = await $(".everest-forms-notice");

    //assert the text of  the message
    await expect(successMessage).toHaveTextContaining(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});

//  Another solution for this would be to use the .getText(), assign it to a variable and make the assertion toEqual("the required text")
//  get success message and get the text
//  const successMessage = await $(".everest-forms-notice").getText();

//  assert the text of  the message
//  await expect(successMessage).toEqual(
//       "Thanks for contacting us! We will be in touch with you shortly"
