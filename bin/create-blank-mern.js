#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectName = process.argv[2] || 'my-blank-mern-app'
const projectPath = path.resolve(projectName)

fs.mkdirSync(projectPath, { recursive: true })

const templatePath = path.join(__dirname, '..', 'template')

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

copyDir(templatePath, projectPath)

// Rename gitignore → .gitignore
// (npm strips/renames files literally named .gitignore when publishing,
// so the template ships it as "gitignore" and we restore the dot here)
const gitignoreSrc = path.join(projectPath, 'gitignore')
const gitignoreDest = path.join(projectPath, '.gitignore')
if (fs.existsSync(gitignoreSrc)) {
  fs.renameSync(gitignoreSrc, gitignoreDest)
}

// Update package.json name
const packageJsonPath = path.join(projectPath, 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
packageJson.name = projectName
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

console.log(`✅ Created ${projectName}`)
console.log('\nNext steps:')
console.log(`  cd ${projectName}`)
console.log('  npm install')
console.log('  cp .env.example .env')
console.log('  # Edit .env with your MongoDB connection string')
console.log('  npm run dev')