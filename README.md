# Cypress-BDD_LatLong.net

# Project README

## Environment Setup

Before running the Cypress project, please make sure you have the following software installed:

1. Node.js - You can download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org)
2. Visual Studio Code (VS Code) - You can download and install VS Code from the official website: [https://code.visualstudio.com](https://code.visualstudio.com)
3. Git Bash - You can download and install Git Bash from the official website: [https://gitforwindows.org](https://gitforwindows.org)
4. Google Chrome - You can download and install Google Chrome from the official website: [https://www.google.com/chrome](https://www.google.com/chrome)

Please ensure that the above software is properly installed and configured on your system before proceeding.

## Project Setup

To set up the project with Cypress and Cucumber BDD, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the project directory using the `cd` command.
3. Initialize a new Node.js project by running the following command:
   ```bash
   npm init -y
   ```
4. Install Cypress as a development dependency by running the following command:
   ```bash
   npm install cypress --save-dev
   ```
5. Install the Cucumber (Gherkin) Full Support VS Code extension. Launch VS Code and go to the Extensions tab. Search for "Cucumber (Gherkin) Full Support" and click the "Install" button.

Your project is now set up with Cypress and Cucumber BDD. You can start writing and running tests using the BDD approach.

## Running Cypress Tests

To run Cypress tests, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the project directory using the `cd` command.
3. Run the following command to open the Cypress Test Runner:
   ```bash
   npx cypress open
   ```
4. The Cypress Test Runner will open, showing the available test files. Click on a test file to run it.

You can also run Cypress tests in headless mode by using the following command instead:
```bash
npx cypress run
```

That's it! You should now be able to run Cypress tests using the Cucumber BDD approach in your project.
