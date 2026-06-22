import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../testData/user";
setDefaultTimeout(60*10*100);

let loginPage!: LoginPage;

Given("user is on login page", async function () {
  loginPage = new LoginPage(this.page);

  await loginPage.navigateToLoginPage();
});

When("user logs in with valid credentials", async function () {
  await loginPage.login(users.validUser.username, users.validUser.password);
});

Then("user should be navigated to dashboard", async function () {
  expect(await loginPage.isSecureAreaVisible()).toBeTruthy();
});

When("user enters invalid credentials", async function () {
  await loginPage.login(users.invalidUser.username , users.invalidUser.password);
});

Then("error message should be displayed", async function () {
  const message = await loginPage.getFlashMessage();

  expect(message).toContain("Your username is invalid!");
});

Given("user is logged in", async function () {
  loginPage = new LoginPage(this.page);

  await loginPage.navigateToLoginPage();

  await loginPage.login(users.validUser.username , users.validUser.password);
});

When("user clicks logout button", async function () {
  await loginPage.clickLogoutButton();
});

Then("user should be redirected to login page", async function () {
  const message = await loginPage.getFlashMessage();

  expect(message).toContain("You logged out");
});

When(
  "user enters {string} and {string}",
  async function (username: string, password: string) {
    await loginPage.login(username, password);
  },
);

Then("login result should be {string}", async function (result: string) {
  if (result === "success") {
    expect(await loginPage.isSecureAreaVisible()).toBeTruthy();
  } else {
    const message = await loginPage.getFlashMessage();

    expect(message.toLowerCase()).toContain("invalid");
  }
});
