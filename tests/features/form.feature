Feature: Form submission using DataTable

    Scenario: Submit form with multiple fields
        Given user is on form page
        When user fills the form with following data:
            | field            | value             |
            | name             | Parth             |
            | email            | parth123@zeus.com |
            | currentAddress   | Mumbai            |
            | permanentAddress | Thane             |
        Then form should be submitted successfully
