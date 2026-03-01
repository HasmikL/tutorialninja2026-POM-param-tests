TutorialNinja UI Automation Framework 🧪

End-to-end UI automation framework built with Playwright + TypeScript, implementing the Page Object Model (POM) design pattern.

This project automates core user flows of the TutorialsNinja demo application and demonstrates scalable automation architecture, parameterized testing, and CI integration.

👩‍💻 Author

Hasmik L.
QA Automation Engineer | Playwright | UI Automation | Test Architecture
GitHub: https://github.com/HasmikL

📌 Project Overview

The goal of this project is to build a clean, maintainable, and scalable UI automation framework for:

🔗 https://tutorialsninja.com/demo/

The test suite covers:

✔ Login validation

✔ Navigation menu category flows

✔ Currency switching functionality

✔ Search functionality

✔ Top slider validation

✔ Category validation (Desktops, Laptops, Components)

✔ Parameterized test execution

The framework is written in TypeScript and follows best practices used in real-world enterprise automation projects.

🏗 Architecture & Design
Page Object Model (POM)

All UI logic is abstracted into reusable page classes inside:

pages/

Each page object:

Encapsulates locators

Provides reusable interaction methods

Separates UI behavior from test assertions

Promotes maintainability and scalability

Test Layer

Test specifications are located in:

tests/

Tests:

Focus only on validation logic

Use tag-based execution (@menu, @top_slider)

Include parameterized scenarios

Support cross-browser execution

🛠 Tech Stack
Technology	Purpose
Playwright	UI automation framework
TypeScript	Type safety & maintainability
Node.js & npm	Dependency management
GitHub Actions	CI pipeline execution
HTML Reporter	Test reporting
📂 Project Structure
tutorialninja2026-POM-param-tests/
│
├── pages/                → Page Object classes
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── MenuPage.ts
│   ├── CurrencyPage.ts
│   ├── SearchPage.ts
│   └── TopSliderPage.ts
│
├── tests/                → Test specifications
│   ├── login.spec.ts
│   ├── menu.spec.ts
│   ├── currency.spec.ts
│   ├── search.spec.ts
│   ├── top-slider.spec.ts
│   └── *.param.spec.ts
│
├── .github/workflows/    → CI configuration
└── playwright.config.ts
🔧 Installation
📥 1. Clone the repository
git clone https://github.com/HasmikL/tutorialninja2026-POM-param-tests.git
📁 2. Navigate to project folder
cd tutorialninja2026-POM-param-tests
📦 3. Install dependencies
npm install
📌 4. Install Playwright browsers
npx playwright install
🚀 Running Tests
Run all tests
npx playwright test
Run specific test groups
npx playwright test --grep "@menu"
npx playwright test --grep "@top_slider"
Run in headed mode
npx playwright test --headed
Open HTML report
npx playwright show-report


🧪 Test Coverage
✅ Login

Validate authentication flow

Verify successful login behavior

Validate error handling


✅ Navigation Menu

Validate desktop categories

Validate laptop categories

Validate component categories

Verify titles, URLs, headings

Validate empty product states


✅ Currency

Switch currencies

Validate price updates

Verify UI consistency

✅ Search

Validate search functionality

Verify results rendering

Validate empty search behavior

✅ Top Slider

Validate slider visibility

Verify navigation behavior

Validate page redirection


🔄 Continuous Integration


The framework includes a GitHub Actions workflow that:

Installs dependencies

Installs Playwright browsers

Executes tagged test suites

Fails the pipeline on test failure

Generates HTML test reports

This simulates real-world enterprise CI automation practices.

🎯 Key Skills Demonstrated

This project highlights:

UI automation using Playwright

Page Object Model implementation

Parameterized testing strategy

Cross-browser test execution

Clean test architecture

CI/CD pipeline integration

Professional TypeScript structure

📈 Project Value

This automation framework demonstrates:

✔ Scalable test design
✔ Maintainable Page Object structure
✔ Real-world QA engineering practices
✔ Production-ready CI integration
✔ Enterprise-style automation architecture
