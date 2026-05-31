# AI Playwright Automation Framework (2026)

This repository is a practical QA automation portfolio project built with **Playwright**, **TypeScript**, and a structured **Page Object Model (POM)** design. It targets the **Demo Web Shop** practice app and demonstrates realistic e-commerce automation workflows.

## ⭐ Why this project matters

This repo is strong because it demonstrates:

- **Hands-on automation skills** with modern tools including Playwright and TypeScript
- **Maintainable architecture** using Page Object Model for reusable behavior
- **Cross-browser validation** across Chromium, Firefox, and WebKit
- **AI-assisted productivity** using agents and MCP-style automation workflows
- **Clean documentation** for recruiters and technical interviewers
- **Candidate readiness** for CI/CD and collaboration in real-world projects

## 🧩 What’s included

- `pages/DemoWebShopHomePage.ts` — Page Object Model implementation for the Demo Web Shop home page
- `pages/DemoWebShopProductPage.ts` — Page Object Model implementation for product detail flows
- `tests/shop.spec.ts` — Test suite covering Demo Web Shop search and add-to-cart workflows
- `playwright.config.ts` — Multi-browser Playwright configuration
- `package.json` — Project dependencies and scripts
- `.github/agents/BrowserAgent.agent.md` — AI agent workflow examples for browser automation

## 🔧 Tech stack

- **Language:** TypeScript
- **Automation framework:** Playwright
- **Test runner:** `@playwright/test`
- **Browser support:** Chromium, Firefox, WebKit
- **Design pattern:** Page Object Model (POM)
- **AI + tooling:** Agent-assisted workflows and MCP-style automation

## 🚀 Setup and run

### Prerequisites

- Node.js 18+ or latest LTS
- npm

### Install dependencies

```bash
git clone https://github.com/stanabiancae94/ai-playwright-automation-2026.git
cd ai-playwright-automation-2026
npm install
npx playwright install
```

### Run tests

- Run full suite (headless):

```bash
npx playwright test
```

- Run tests with visible browser windows:

```bash
npx playwright test --headed
```

- Open Playwright test runner UI:

```bash
npx playwright test --ui
```

## 🧪 What the tests cover

- Demo Web Shop homepage load and search availability
- Product search results for a shopping query
- Product detail page navigation
- Adding a product to the shopping cart and cart quantity validation

## 🤖 AI-enabled workflow

This project highlights AI-enabled automation support for faster development and experimentation:

- Browser automation workflows using agent definitions
- AI-assisted code generation and validation in the automation lifecycle
- A modern QA workflow that combines test code with agent-powered interactions

## 📈 Growth opportunities

Good next steps to strengthen this portfolio project:

- Add page objects for additional Demo Web Shop pages
- Add data-driven and parameterized test coverage
- Add GitHub Actions CI workflows for automated pipeline runs
- Add linting, formatting, and type safety enforcement
- Add test artifacts, screenshots, and trace reports for debugging

## 💼 Why this repo is portfolio-ready

This project is easy for prospective employers to review and extend. It demonstrates both technical automation skills and modern workflows, making it useful in interviews and hiring discussions.

## 📌 Notes

- The current suite focuses on a Demo Web Shop search and cart workflow
- The repository is structured for growth into a broader automation suite for additional e-commerce flows
