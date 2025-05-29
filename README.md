#### For Assignment Submission – Automation Test Project ####

- This project contains Playwright automated tests for the **Automated Tests Project** asignment.
- Repository: https://github.com/your-username/Automation-Test-Project <br>
- Name: Automated Tests Project
- Technologies: Playwright, Node.js
- Tests (javascipt/Typescript): Positive and Negative Login tests
- CI/CD: Configured using GitHub Actions
- Report: HTML test report is generated and available in workflow artifacts
- Contac me via: vu.nguyen.hh@gmail.com

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
    1. Create github CI file: Automation-Test-Project\.github\workflows\.ci.yml
    
      name: Playwright Tests

      on:
        push:
          branches: [main]
        pull_request:
          branches: [main]

      jobs:
        test:
          runs-on: ubuntu-latest

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

          - name: Upload test report
            uses: actions/upload-artifact@v2.3.1
            with:
              name: playwright-report
              path: playwright-report
    
  2. CI/CD pipeline: check the GitHub Actions

    2.1 Go to: https://github.com/vunhh/Automation-Test-Project/actions

    2.2 Check if the Playwright Tests workflow runs immediately after you push