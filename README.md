# 🧪 serverest-api

Automated API testing project using Cypress and Mochawesome.

![Cypress Tests](https://github.com/lrisch-l/serverest-api/actions/workflows/cypress.yml/badge.svg)
![Made with Cypress](https://img.shields.io/badge/Cypress-automation-brightgreen?logo=cypress)
![Node.js](https://img.shields.io/badge/Node.js-v18.17.0-blue?logo=node.js)
![Status](https://img.shields.io/badge/tests-passing-brightgreen)
![Profile Views](https://komarev.com/ghpvc/?username=lrisch-l)

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
├── videos/            # Cypress video recordings
├── reports/           # Mochawesome HTML reports


```

## 🚀 Run tests with:

```bash
npm run report:all:split

```

Or run individual suites

```

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

## 📈 GitHub Stats

<p align="center"><img src="https://github-readme-stats.vercel.app/api?username=lrisch-l&show_icons=true&theme=github_dark" width="500"/></p>

## 🧰 Technologies Used

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" />
</p>


## 🛠️ CI/CD Integration

<details><summary>🔧 Click to expand CI/CD details</summary>
This project uses GitHub Actions to run Cypress tests on every push and pull request to main.
Failed tests automatically upload screenshots and videos as artifacts for debugging.
Reports are generated using Mochawesome and stored in /cypress/reports.
📦 All artifacts are downloadable from the [Actions tab](https://github.com/lrisch-l/serverest-api/actions).
</details>

## 📜 Endpoint Documentation

<details>
  <summary>📘 Click to view API Endpoints</summary>

  <br>

  | Endpoint     | Method | Description         |
  |--------------|--------|---------------------|
  | `/login`     | POST   | Authenticates user  |
  | `/usuarios`  | GET    | Lists users         |
  | `/produtos`  | GET    | Lists products      |
  | `/carrinhos` | GET    | Retrieves carts     |

</details>








 


