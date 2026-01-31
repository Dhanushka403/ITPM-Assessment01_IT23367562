Assessment 01 - Automation Component (IT23367562)
    
This repository contains a professional automated testing suite developed using Playwright. The project evaluates the accuracy and robustness of the Swift Translator web application by automating 35 unique transliteration scenarios.

Prerequisites & Installation
Before running the tests, ensure you have Node.js (v16 or higher) installed.

IN PowerShell
1. Clone or Navigate to the Directory:
cd "C:\SLIIT\Y3 S2\IT3040-ITPM\Assessment 01"

2. Install Node Modules: This command installs the Playwright framework and necessary dependencies.

npm install -D @playwright/test

3. Install Browsers: Playwright requires specific browser binaries to run the tests.

npx playwright install chromium

Running the Tests
To execute the test script and observe the automation in real-time, use the terminal command below.

The Primary Command:
npx playwright test tests/IT23367562.spec.js --headed --project=chromium --workers=1

Why use these flags?

.   --headed: Opens a visible browser window so you can watch the system type and convert text.

.   --project=chromium: Ensures the test runs on the Chromium engine for maximum compatibility.

.   --workers=1: Runs tests sequentially to allow for easier monitoring of console logs.

Understanding the Output
The script provides two types of feedback:

1. Console Logs (Live Monitoring)
During execution, the terminal will display the status of each Test Case ID (e.g., Pos_Fun_0001). It compares the Expected Output vs the Actual Output captured from the website.

2. HTML Report (Detailed Analysis)
Once the tests are finished, you can generate a visual report to analyze any failures (especially the Neg_Fun cases).

PowerShell
npx playwright show-report

Notes for the Evaluator
.   Space Trigger: The script includes a manual Space key press logic (await page.keyboard.press('Space')) because the Swift Translator requires a space or punctuation to trigger the transliteration.

.   Soft Assertions: I have used expect.soft() to ensure that if a specific transliteration fails (expected in Negative Testing), the entire suite continues to run until all 35 cases are completed.
