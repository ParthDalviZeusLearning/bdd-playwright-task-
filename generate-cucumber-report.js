const reporter = require("cucumber-html-reporter");
const path = require("path");
 
const options = {
  theme: "bootstrap",
  jsonFile: path.join(__dirname, "reports", "cucumber", "cucumber-report.json"),
  output: path.join(__dirname, "reports", "cucumber-html-report", "cucumber-report.html"),
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0",
    "Test Environment": "QA",
    "Browser": "Chromium",
    "Platform": process.platform,
    "Executed": "Local"
  }
};
 
reporter.generate(options);
console.log("Cucumber HTML report generated successfully.");
 