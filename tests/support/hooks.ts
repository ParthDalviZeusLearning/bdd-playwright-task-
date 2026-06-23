import { Before, After, Status } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  try {
    if (scenario.result?.status === Status.FAILED) {
      const screenshotDir = path.join(process.cwd(), "reports", "screenshots");

      // Create reports/screenshots if it does not exist
      if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
      }

      const safeScenarioName = scenario.pickle.name.replace(
        /[^a-zA-Z0-9]/g,
        "_",
      );
      const screenshotPath = path.join(
        screenshotDir,
        `${safeScenarioName}.png`,
      );

      await this.page.screenshot({
        path: screenshotPath,
        fullPage: true,
      });

      console.log(`Screenshot saved at: ${screenshotPath}`);
    }
  } catch (error) {
    console.error("Error while capturing screenshot:", error);
  } finally {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
});
