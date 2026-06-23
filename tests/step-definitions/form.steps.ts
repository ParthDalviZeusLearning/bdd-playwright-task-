 import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { FormPage } from "../pages/FormPage";


let formPage!: FormPage;
let formData: Record<string, string> = {};

Given("user is on form page", async function () {
  formPage = new FormPage(this.page);
  await formPage.navigateToFormPage();
});

When("user fills the form with following data:", async function (dataTable: DataTable) {
  const rows = dataTable.hashes();

  formData = {};

  for (const row of rows) {
    formData[row.field] = row.value;
  }

  await formPage.fillForm(formData);
  await formPage.clickSubmit();
});

Then("form should be submitted successfully", async function () {
  await formPage.verifyFormSubmission(formData.name , formData.email);
});