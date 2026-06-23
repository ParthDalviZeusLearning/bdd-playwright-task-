import { Page, Locator, expect } from "@playwright/test";
import { URLS } from "../utils/constants";

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly flashMessage: Locator;
  private readonly logoutButton: Locator;
  private readonly secureAreaHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.flashMessage = page.locator("#flash");
    this.logoutButton = page.getByRole("link", { name: "Logout" });
    this.secureAreaHeader = page.locator("h2");
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto(URLS.LOGIN);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getFlashMessage(): Promise<string> {
    return (await this.flashMessage.textContent()) ?? "";
  }

  async clickLogoutButton(): Promise<void> {
    await this.logoutButton.click();
  }

  async isSecureAreaVisible(): Promise<boolean> {
    return await this.secureAreaHeader.isVisible();
  }

  async verifySuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(
      "https://the-internet.herokuapp.com/secure",
    );

    await expect(this.secureAreaHeader).toBeVisible();

    await expect(this.flashMessage).toContainText(
      "You logged into a secure area!",
    );
  }

  async verifyInvalidLogin(): Promise<void> {
    await expect(this.flashMessage).toBeVisible();

    await expect(this.flashMessage).toContainText("invalid");
  }

  async verifySuccessfulLogout(): Promise<void> {
    await expect(this.flashMessage).toContainText(
      "You logged out of the secure area!",
    );
  }

  async verifyLoginResult(result: string): Promise<void> {
    if (result.toLowerCase() === "success") {
      await this.verifySuccessfulLogin();
    } else {
      await this.verifyInvalidLogin();
    }
  }
}
