#### For Assignment Submission – Automation Test Project ####

- This project contains Playwright automated tests for the **Automated Tests Project** assignment.
- Repository: https://github.com/vunhh/Automation-Test-Project
- Name: Automated Tests Project
- Technologies: Playwright, Node.js
- Tests (javascript/Typescript): Positive and Negative Login tests
- CI/CD: Configured using GitHub Actions
- Report: HTML test report is generated and available in workflow artifacts
- Contact me: vu.nguyen.hh@gmail.com

## 1. Prerequisites
- Node.js (v16 or later recommended)
- npm (comes with Node.js)
- Chrome/Chromium browser installed (Playwright will handle this automatically on first run)

## 2. Setup

  2.1. **Clone the repository:**
    
    git clone https://github.com/vunhh/Automation-Test-Project.git

    cd Automation-Test-Project

  2.2. **Install dependencies:**
    
    npm install

    npx playwright install
   

## 3. Running the Tests

```sh
npm run test
```

## 4. View the Playwright HTML Report
After running tests, view the detailed report:
```sh
npx playwright show-report
```

## 5. CI/CD: Configured using GitHub Actions
    1. Github CI file: Automation-Test-Project\.github\workflows\.ci.yml
    
      name: Playwright Tests

      on:
        push:
          branches: [main]
        pull_request:
          branches: [main]

      jobs:
        test:
          runs-on: ubuntu-latest

          permissions:
            contents: write

          steps:
          - name: Checkout repository
            uses: actions/checkout@v3

          - name: Setup Node.js
            uses: actions/setup-node@v3
            with:
              node-version: '18'

          - name: Install dependencies
            run: npm ci

          - name: Install Playwright Browsers
            run: npx playwright install --with-deps

          - name: Run Playwright Tests
            run: npm run test
            continue-on-error: true
          
          - name: Upload test report
            uses: actions/upload-artifact@v4
            with:
              name: playwright-report
              path: playwright-report
    
  2. CI/CD pipeline: check the GitHub Actions

    2.1 Go to: https://github.com/vunhh/Automation-Test-Project/actions

    2.2 Check if the Playwright Tests workflow runs immediately after you push

## 6. How to View Test Reports from GitHub Actions

After each test run, a report is automatically uploaded as an artifact. You can follow the steps below to download and view the HTML test report:

🔍 Step 1: Go to the “Actions” tab

    Open your GitHub repository

    Click on the Actions tab

    Select the workflow named “Playwright Tests” (or your custom name)

📂 Step 2: Select the latest run

    Click on the most recent workflow under the "Workflow runs" section

    You will see steps like: Checkout, Install, Run Tests, and Upload test report

📎 Step 3: Download the report artifact

    Scroll to the bottom of the workflow run page

    Find the Artifacts section

    Click on playwright-report to download the .zip file

🖥️ Step 4: Open the test report

    Extract the downloaded ZIP file

    Open the playwright-report folder

    Double-click index.html to open it in your browser (Chrome, Edge, or Safari)