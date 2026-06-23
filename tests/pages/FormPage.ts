import { Page, Locator, expect } from "@playwright/test";
import { URLS } from "../utils/constants";
export class FormPage {
  private readonly page: Page;
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly currentAddressInput: Locator;
  private readonly permanentAddressInput: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator("#userName");
    this.emailInput = page.locator("#userEmail");
    this.currentAddressInput = page.locator("#currentAddress");
    this.permanentAddressInput = page.locator("#permanentAddress");
    this.submitButton = page.locator("#submit");
  }

  async navigateToFormPage(): Promise<void> {
    await this.page.goto(URLS.FORM);
  }

  async fillField(field: string, value: string): Promise<void> {
    switch (field.toLowerCase()) {
      case "name":
        await this.nameInput.fill(value);
        break;

      case "email":
        await this.emailInput.fill(value);
        break;

      case "currentaddress":
        await this.currentAddressInput.fill(value);
        break;

      case "permanentaddress":
        await this.permanentAddressInput.fill(value);
        break;

      default:
        throw new Error(`Unsupported field:{field}`);
    }
  }

  async fillForm(data: Record<string, string>): Promise<void> {
    for (const key of Object.keys(data)) {
      await this.fillField(key, data[key]);
    }
  }

  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }

  async verifyFormSubmission(name: string, email: string): Promise<void> {
    await expect(this.page.locator("#output")).toBeVisible();

    await expect(this.page.locator("#name")).toContainText(name);

    await expect(this.page.locator("#email")).toContainText(email);
  }
}
