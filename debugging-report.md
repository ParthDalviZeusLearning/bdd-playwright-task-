# DEBUGGING REPORT 

## Failure Simulations

### Failure Category 1: Element Not Found

 #### Steps to Reproduce:
    
 1. Open LoginPage.ts.
 2. Replace the login button locator with #loginButtonDoesNotExist.
 3. Run: npx cucumber-js --name "Successful login with valid credentials"

 #### Root Cause
 
 Login button locator was changed to a non-existent element, so Playwright could not find it.

 #### Failure Log 
 ` ` ` 
 Failed scenarios:
  1) Successful login with valid credentials # tests\features\login.feature:4
       When user logs in with valid credentials # tests\step-definitions\login.steps.ts:16
           locator.click: Timeout 30000ms exceeded.
           Call log:
             - waiting for locator('#loginButtonDoesNotExist')
           
               at LoginPage.login (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\pages\LoginPage.ts:30:28)
               at async CustomWorld.<anonymous> (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\step-definitions\login.steps.ts:17:3)
 ` ` ` 

 #### Screenshot Captured :
 reports\screenshots\Failure_1_Element_Not_Found.png


### Failure Category 2: Timeout Error

 #### Steps to Reproduce:

 1. Open LoginPage.ts. 
 2. Add waitForSelector("#neverAppears", { timeout: 3000 }) inside login().
 3. Run: npx cucumber-js --name "Successful login with valid credentials"

 #### Root Cause
 
 The script waited for an element that never appeared, causing a timeout.

 #### Failure Log 
 ` ` ` 
 Failed scenarios:
  1) Successful login with valid credentials # tests\features\login.feature:4
       When user logs in with valid credentials # tests\step-definitions\login.steps.ts:16
           page.waitForSelector: Timeout 3000ms exceeded.
           Call log:
             - waiting for locator('#neverAppears') to be visible
           
               at LoginPage.login (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\pages\LoginPage.ts:29:21)
               at async CustomWorld.<anonymous> (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\step-definitions\login.steps.ts:17:3)
 ` ` ` 

 #### Screenshot Captured :
  reports\screenshots\Failure_2_Timeout_Error.png



### Failure Category 3: Assertion Mismatch 

 #### Steps to Reproduce:

 1. Open verifySuccessfulLogin() in LoginPage.ts. 
 2. Replace the expected success message with Login successful.
 3. Run: npx cucumber-js --name "Successful login with valid credentials"

 #### Root Cause
 
 The expected assertion text did not match the actual application message.

 #### Failure Log 
 ` ` ` 
    Failed scenarios:
    1) Successful login with valid credentials # tests\features\login.feature:4
        Then user should be navigated to dashboard # tests\step-definitions\login.steps.ts:20
            Error: expect(locator).toContainText(expected) failed
            
            Locator: locator('#flash')
            Timeout: 5000ms
            - Expected substring  - 1
            + Received string     + 4
            
            - Login successful
            +
            +             You logged into a secure area!
            +             ×
            +           
            
            Call log:
                - Expect "to.have.text" with timeout 5000ms
                - waiting for locator('#flash')
                14 × locator resolved to <div id="flash" data-alert="" class="flash success">…</div>
                    - unexpected value "
                        You logged into a secure area!
                        ×
                        "
            
                at captureRawStack (C:\Users\Parth.Dalvi\BDD_Training_Task\node_modules\playwright-core\lib\coreBundle.js:3172:17)
                at callMatcherAsStep (C:\Users\Parth.Dalvi\BDD_Training_Task\node_modules\playwright\lib\matchers\expect.js:12875:57)
                at Object.toContainText (C:\Users\Parth.Dalvi\BDD_Training_Task\node_modules\playwright\lib\matchers\expect.js:12865:23)
                at LoginPage.verifySuccessfulLogin (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\pages\LoginPage.ts:55:37)
                at async CustomWorld.<anonymous> (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\step-definitions\login.steps.ts:21:3)

 ` ` ` 

 #### Screenshot Captured :
  reports\screenshots\Failure_3_Assertion_Mismatch.png


### Failure Category 4: Incorrect Locator

 #### Steps to Reproduce: 
 1. Open FormPage.ts.
 2. Replace the email locator with #emailWrong.
 3. Run: npx cucumber-js tests/features/form.feature

 #### Root Cause
 
 The email field locator was incorrect, so Playwright could not locate the textbox.

 #### Failure Log 

 ` ` ` 
    Failed scenarios:
    1) Submit form with multiple fields # tests\features\form.feature:3
        When user fills the form with following data: # tests\step-definitions\form.steps.ts:11
            | field            | value             |
            | name             | Parth             |
            | email            | parth123@zeus.com |
            | currentAddress   | Mumbai            |
            | permanentAddress | Thane             |
            locator.fill: Timeout 30000ms exceeded.
            Call log:
                - waiting for locator('#emailWrong')
            
                at FormPage.fillField (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\pages\FormPage.ts:32:31)
                at FormPage.fillForm (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\pages\FormPage.ts:50:18)
                at async CustomWorld.<anonymous> (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\step-definitions\form.steps.ts:20:3)

 ` ` ` 

 #### Screenshot Captured :
  reports\screenshots\Failure_4_Incorrect_Locator.png


### Failure Category 5: Navigation Failure

 #### Steps to Reproduce: 
 1. Open FormPage.ts.
 2. Replace the valid form page URL with an invalid route.
 3. Run: npx cucumber-js tests/features/form.feature

 #### Root Cause
 
 The browser was navigated to an invalid page, so the expected form elements were unavailable.

 #### Failure Log 

 ` ` ` 
    2) Successful login with valid credentials # tests\features\login.feature:4
        Given user is on login page # tests\step-definitions\login.steps.ts:10
            page.goto: Timeout 30000ms exceeded.
            Call log:
                - navigating to "https://the-internet.herokuapp.com/login", waiting until "load"
            
                at LoginPage.navigateToLoginPage (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\pages\LoginPage.ts:23:21)
                at CustomWorld.<anonymous> (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\step-definitions\login.steps.ts:13:19)
    3) Invalid login attempt # tests\features\login.feature:11
        Given user is on login page # tests\step-definitions\login.steps.ts:10
            page.goto: net::ERR_NAME_NOT_RESOLVED at https://the-internet.herokuapp.com/login
            Call log:
                - navigating to "https://the-internet.herokuapp.com/login", waiting until "load"
            
                at LoginPage.navigateToLoginPage (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\pages\LoginPage.ts:23:21)
                at CustomWorld.<anonymous> (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\step-definitions\login.steps.ts:13:19)
    4) Verify error message visibility # tests\features\login.feature:18
        Given user is on login page # tests\step-definitions\login.steps.ts:10
            page.goto: Timeout 30000ms exceeded.
            Call log:
                - navigating to "https://the-internet.herokuapp.com/login", waiting until "load"
            
                at LoginPage.navigateToLoginPage (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\pages\LoginPage.ts:23:21)
                at CustomWorld.<anonymous> (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\step-definitions\login.steps.ts:13:19)

 ` ` ` 
 #### Screenshot Captured :
  reports\screenshots\Failure_5_Navigation_Failure.png


## Timeout Simulation

### Page Load Timeout

 #### Steps used :

 1. Open FormPage.ts.
 2. Add { timeout: 1 } to the goto() call.
 3. Run: npx cucumber-js tests/features/form.feature

 #### Root Cause :
 The page load timeout was set too low for the page to open.

 #### Failure Log 

 Failed scenarios:
  1) Submit form with multiple fields # tests\features\form.feature:3
       Given user is on form page # tests\step-definitions\form.steps.ts:6
           page.goto: Timeout 1ms exceeded.
           Call log:
             - navigating to "https://demoqa.com/text-box", waiting until "load"
           
               at 
               
               FormPage.navigateToFormPage (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\pages\FormPage.ts:21:21)
               at CustomWorld.<anonymous> (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\step-definitions\form.steps.ts:8:18)
 
 #### Screenshot Captured :
  reports\screenshots\Timeout_1_Page_Load_Timeout.png


### Element Timeout

 #### Steps used :

 1. Open LoginPage.ts.
 2. Add waitForSelector("#nonExistentElement", { timeout: 3000 }) inside login().
 3. Run: npx cucumber-js --name "Successful login with valid credentials"

 #### Root Cause :
  The script waited for an element that never appeared on the page.

 #### Failure Log 

 Failed scenarios:
  1) Successful login with valid credentials # tests\features\login.feature:4
       When user logs in with valid credentials # tests\step-definitions\login.steps.ts:16
           page.waitForSelector: Timeout 3000ms exceeded.
           Call log:
             - waiting for locator('#nonExistentElement') to be visible
           
               at LoginPage.login (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\pages\LoginPage.ts:29:21)
               at async CustomWorld.<anonymous> (C:\Users\Parth.Dalvi\BDD_Training_Task\tests\step-definitions\login.steps.ts:17:3)

 #### Screenshot Captured :
  reports\screenshots\Timeout_2_Element_Timeout.png


### Step Timeout

 #### Steps used :

 1. Add a 70-second delay inside the valid login step.
 2. Keep Cucumber step timeout at 60 seconds.
 3. Run: npx cucumber-js --name "Successful login with valid credentials"


 #### Root Cause :
 The step execution time exceeded the configured Cucumber timeout.

 #### Failure Log 

 Failed scenarios:
  1) Successful login with valid credentials # tests\features\login.feature:4
       When user logs in with valid credentials # tests\step-definitions\login.steps.ts:20
           Error: function timed out, ensure the promise resolves within 60000 milliseconds
               at Timeout.<anonymous> (C:\Users\Parth.Dalvi\BDD_Training_Task\node_modules\@cucumber\cucumber\src\time.ts:50:14)
               at listOnTimeout (node:internal/timers:605:17)
               at processTimers (node:internal/timers:541:7)

 #### Screenshot Captured :
 reports\screenshots\Timeout_3_Step_Timeout.png
