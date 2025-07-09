# 🧪 serverest-api

Automated API testing project using Cypress and Mochawesome.

![Cypress Tests](https://github.com/lrisch-l/serverest-api/actions/workflows/cypress.yml/badge.svg)
![Made with Cypress](https://img.shields.io/badge/Cypress-automation-brightgreen?logo=cypress)
![Node.js](https://img.shields.io/badge/Node.js-v18.17.0-blue?logo=node.js)
![Status](https://img.shields.io/badge/tests-passing-brightgreen)

Automated API testing project for the [ServeRest](https://github.com/PauloGoncalvesBH/ServeRest) API using [Cypress](https://www.cypress.io/) and [Mochawesome](https://github.com/adamgruber/mochawesome).  
Includes modular test reports, CI integration via GitHub Actions, and visual artifacts (screenshots/videos) for debugging.

![Profile Views](https://komarev.com/ghpvc/?username=lrisch-l)

## 🚀 Getting Started

```bash

npm install

```
## 📂 Structure

```

cypress/
├── e2e/api/           # Test cases organized by endpoint
├── screenshots/       # Screenshots captured on test failure
html/                  # Mochawesome HTML reports
generate-reports.js    # Script to merge reports

```

## 🚀 Run tests with:

```bash
npm run report:all:split

Or run individual suites

npm run report:usuarios
npm run report:produtos
npm run report:login
npm run report:carrinhos

```

## 📊 Test Reports

🔹 [Login Report](https://github.com/lrisch-l/serverest-api/blob/main/html/login-report.html)  
🟢 [Users Report](https://github.com/lrisch-l/serverest-api/blob/main/html/usuarios-report.html)  
🟡 [Products Report](https://github.com/lrisch-l/serverest-api/blob/main/html/produtos-report.html)  
🟠 [Carts Report](https://github.com/lrisch-l/serverest-api/blob/main/html/carrinhos-report.html)


## 🛠️ CI/CD Integration

```

This project uses GitHub Actions to run Cypress tests on every push and pull request to main.
Failed tests automatically upload screenshots and videos as artifacts for debugging.

```






 


