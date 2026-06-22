Feature: Login functionality

    @smoke
    Scenario: Successful login with valid credentials

    @invalid
    Scenario: Invalid login attempt

        Given user is on login page
        When user enters invalid credentials
        Then error message should be displayed

    @negative
    Scenario: Verify error message visibility

        Given user is on login page
        When user enters invalid credentials
        Then error message should be displayed
    
    @logout
    Scenario: Verify logout functionality

        Given user is logged in
        When user clicks logout button
        Then user should be redirected to login page

    @outline
    Scenario Outline: Login with multiple credentials

        Given user is on login page
        When user enters "<username>" and "<password>"
        Then login result should be "<result>"

        Examples:
            | username | password             | result  |
            | tomsmith | SuperSecretPassword! | success |
            | tomsmith | wrong123             | failure |
