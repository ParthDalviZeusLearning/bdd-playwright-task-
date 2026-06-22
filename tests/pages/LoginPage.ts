import { Page, Locator, expect } from "@playwright/test";

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
    await this.page.goto("https://the-internet.herokuapp.com/login");
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
}
