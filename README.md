# BDD Training Task – Playwright + TypeScript + Cucumber

## Project Overview

This project is an end-to-end BDD automation framework built using Playwright, TypeScript, and Cucumber.
It automates two sample applications and demonstrates Page Object Model (POM), DataTable handling, report generation, debugging simulations, and failure screenshot capture.

## Tech Stack

- Language: TypeScript
- Automation Tool: Playwright
- BDD Framework: Cucumber
- Design Pattern: Page Object Model (POM)
- Reports: Cucumber HTML Report
- IDE: VS Code
- Runtime: Node.js

## Applications Automated

 1. Login Application
   URL: https://the-internet.herokuapp.com/login

 2. Form Application
   URL: https://demoqa.com/text-box


## Project Structure 

```text

BDD_Training_Task/
│
├── tests/
│   ├── features/
│   │   ├── login.feature
│   │   └── form.feature
│   │
│   ├── step-definitions/
│   │   ├── login.steps.ts
│   │   └── form.steps.ts
│   │
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   └── FormPage.ts
│   │
│   ├── support/
│   │   ├── hooks.ts
│   │   └── world.ts
│   │
│   ├── testData/
│   │   └── user.ts
│   │
│   └── utils/
│       └── constants.ts
│
├── reports/
│   ├── screenshots/
│   ├── cucumber/
│   ├── cucumber-html-report/
│
├── cucumber.js
├── debugging-report.md
├── generate-cucumber-report.js
├── package.json
└── README.md

```

## Installation

1. Clone the repository

```bash
git clone https://github.com/ParthDalviZeusLearning/bdd-playwright-task- 
cd BDD_Training_Task
```  

2. Install dependencies

```bash 
npm install
```
3. Install Playwright browsers

```bash
npx playwright install
```

## How to Run Tests

Run Cucumber BDD tests

```bash
npx cucumber-js
```
## How to Generate Reports

Generate Cucumber HTML Report

Run Cucumber tests first:

```bash
npx cucumber-js
```
Then generate HTML report:

```bash
node generate-cucumber-report.js
```
## Deliverables Completed

- Playwright + TypeScript + Cucumber framework setup
- Login automation scenario
- Logout automation scenario
- Form submission using DataTable
- Page Object Model implementation
- Failure and timeout simulations
- Screenshot capture for failed scenarios
- Cucumber HTML report
- Debugging documentation

