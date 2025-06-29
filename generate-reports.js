const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const specsDir = 'cypress/e2e'
const jsonDir = 'reports'
const htmlDir = 'html'

if (!fs.existsSync(jsonDir)) fs.mkdirSync(jsonDir, { recursive: true })
if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir, { recursive: true })

function getAllSpecFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  let specPaths = []

  for (const entry of entries) {
    const fullPath = path.resolve(dir, entry.name)
    if (entry.isDirectory()) {
      specPaths = specPaths.concat(getAllSpecFiles(fullPath))
    } else if (entry.name.endsWith('.cy.js')) {
      specPaths.push(fullPath)
    }
  }

  return specPaths
}

const specFiles = getAllSpecFiles(specsDir)

if (specFiles.length === 0) {
  console.log('❌ No .cy.js files found under cypress/e2e')
  process.exit(1)
}

console.log(`🗂️ Found ${specFiles.length} spec(s)`)

specFiles.forEach(file => {
  const specName = path.basename(file, '.cy.js')
  const jsonPath = `${jsonDir}/${specName}-report.json`
  const htmlPath = `${htmlDir}/${specName}-report.html`

  try {
    console.log(`📍 Running ${file}`)

    execSync(
      `npx cypress run --spec "${file}" --reporter mochawesome --reporter-options reportDir=${jsonDir},overwrite=true,html=false,json=true,reportFilename=${specName}-report`,
      { stdio: 'inherit' }
    )

    execSync(
      `npx mochawesome-report-generator ${jsonPath} --reportDir ${htmlDir} --reportFilename ${specName}-report`,
      { stdio: 'inherit' }
    )

    fs.unlinkSync(jsonPath)

    console.log(`✅ Report saved: ${htmlPath} (JSON discarded)\n`)
  } catch (error) {
    console.error(`❌ Error running ${file}\n${error.message}\n`)
  }
})