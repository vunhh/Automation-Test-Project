# Automated Tests Project

This project contains Playwright automated tests for the **Testing** feature.

## Prerequisites
- Node.js (v16 or later recommended)
- npm (comes with Node.js)
- Chrome/Chromium browser installed (Playwright will handle this automatically on first run)

## Setup
1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd auto_webmobile
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Test Data:**
   - Place all required test data files

## Running the Tests

### Run a Specific Test Case
```sh
npm run test:web
```

### View the Playwright HTML Report
After running tests, view the detailed report:
```sh
npx playwright show-report
```

## Troubleshooting
- **Test Fails:**
  - Check the Playwright HTML report for error details and screenshots.
  - Ensure all test data files are present in the `test-data` directory.
  - Make sure your environment (URLs, credentials) matches the test setup.
- **Dependencies Issues:**
  - Run `npm install` again to ensure all packages are installed.

## Custom Scripts
You can add a shortcut in `package.json` for easier test runs:
```json
"scripts": {
  "test:testrun": "playwright test"
}
```
Then run:
```sh
npm run test:testrun
```

## Contact
If you have questions or issues, please contact the automation maintainer or your development team. 