module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: [
      "tests/step-definitions/*.ts",
      "tests/support/*.ts"
    ],
    format: [
      "progress",
      "json:reports/cucumber/cucumber-report.json"
    ],
    paths: [
     "tests/features/*.feature"
    ],
    publishQuiet: true
  }
};
 