# 🧪 serverest-api

Automated API testing project using Cypress and Mochawesome.

![Cypress Tests](https://github.com/lrisch-l/serverest-api/actions/workflows/cypress.yml/badge.svg)
![Made with Cypress](https://img.shields.io/badge/Cypress-automation-brightgreen?logo=cypress)
![Node.js](https://img.shields.io/badge/Node.js-v18.17.0-blue?logo=node.js)
![Status](https://img.shields.io/badge/tests-passing-brightgreen)

Automated API testing project for the [ServeRest](https://github.com/PauloGoncalvesBH/ServeRest) API using [Cypress](https://www.cypress.io/) and [Mochawesome](https://github.com/adamgruber/mochawesome).  
Includes modular test reports, CI integration via GitHub Actions, and visual artifacts (screenshots/videos) for debugging.


## 🚀 Getting Started

```bash

npm install

## 📂 Structure

cypress/
├── e2e/api/           # Test cases organized by endpoint
├── screenshots/       # Screenshots captured on test failure
html/                  # Mochawesome HTML reports
generate-reports.js    # Script to merge reports

## 🚀 Run tests with:

```bash
npm run report:all:split

Or run individual suites

npm run report:usuarios
npm run report:produtos
npm run report:login
npm run report:carrinhos

## 📊 Test Reports

🔹 [Login Report](https://lrisch-l.github.io/serverest-api/login-report.html)  
🟢 [Users Report](https://lrisch-l.github.io/serverest-api/usuarios-report.html)  
🟡 [Products Report](https://lrisch-l.github.io/serverest-api/produtos-report.html)  
🟠 [Carts Report](https://lrisch-l.github.io/serverest-api/carrinhos-report.html)

## 🛠️ CI/CD Integration

This project uses GitHub Actions to run Cypress tests on every push and pull request to main.
Failed tests automatically upload screenshots and videos as artifacts for debugging.

## 👨‍💻 Author

**Leandro Risch**  
[GitHub](https://github.com/lrisch-l) • [LinkedIn](https://www.linkedin.com/in/leandro-risch-38118726a/)

QA Engineer with solid experience in automated testing and quality assurance.  
Working with Cypress since 2016, focused on building reliable, maintainable, and scalable test suites for APIs and web applications.  
Passionate about clean code, continuous integration, and delivering high-quality software through automation.




 


