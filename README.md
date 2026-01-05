# Playwright AI-Powered Automation Framework (2026)

This repository contains a modern end-to-end testing framework built with **Playwright**, **TypeScript**, and **Cursor AI**. It follows the **Page Object Model (POM)** architectural pattern for maximum maintainability and scalability.

## 🛠️ Tech Stack

-    **Language:** TypeScript
-    **Framework:** [Playwright](https://playwright.dev/)
-    **IDE:** [Cursor AI](https://cursor.sh/) (AI-Native Development)
-    **CI/CD:** GitHub Actions
-    **Reporters:** HTML Report, List Reporter

## 🏗️ Project Structure

-    `pages/` - Contains Page Object classes (locators and encapsulated actions).
-    `tests/` - Contains functional test suites and test scenarios.
-    `.github/workflows/` - CI/CD pipeline configuration for automated cloud execution.

## 🚀 Getting Started

### Prerequisites

-    Node.js (LTS version)
-    npm (installed automatically with Node)

### Installation

1. Clone the repository:
     ```bash
     git clone [https://github.com/biancastana20/ai-playwright-automation-2026.git](https://github.com/biancastana20/ai-playwright-automation-2026.git)
     Install dependencies:
     ```

Bash

npm install
Install Playwright browsers:

Bash

npx playwright install
🧪 Running Tests
Run all tests (Headless):

Bash

npx playwright test
Run tests with Browser visible (Headed):

Bash

npx playwright test --headed
Open Interactive UI Mode (Recommended for Debugging):

Bash

npx playwright test --ui
📊 CI/CD Integration
This project is integrated with GitHub Actions. Every time code is pushed to the main branch, the test suite is automatically executed in a cloud environment (Ubuntu) to ensure build stability.
