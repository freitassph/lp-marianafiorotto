#!/usr/bin/env node

/**
 * Build Script — LP Dra. Mariana Fiorotto
 * Concatena CSS e JS de src/ → public/
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');

// --- CSS Build ---
const cssOrder = [
  'css/tokens.css',
  'css/reset.css',
  'css/base.css',
  'css/grid.css',
  'css/utilities.css',
];

function getFilesFromDir(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith(ext))
    .sort()
    .map(f => path.join(dir, f));
}

function buildCSS() {
  let css = '';

  // 1. Core files in order
  for (const file of cssOrder) {
    const fullPath = path.join(SRC, file);
    if (fs.existsSync(fullPath)) {
      css += `/* === ${file} === */\n`;
      css += fs.readFileSync(fullPath, 'utf8') + '\n\n';
    }
  }

  // 2. Components (alphabetical)
  const components = getFilesFromDir(path.join(SRC, 'css/components'), '.css');
  for (const file of components) {
    css += `/* === components/${path.basename(file)} === */\n`;
    css += fs.readFileSync(file, 'utf8') + '\n\n';
  }

  // 3. Sections (alphabetical)
  const sections = getFilesFromDir(path.join(SRC, 'css/sections'), '.css');
  for (const file of sections) {
    css += `/* === sections/${path.basename(file)} === */\n`;
    css += fs.readFileSync(file, 'utf8') + '\n\n';
  }

  // 4. Animations last
  const animPath = path.join(SRC, 'css/animations.css');
  if (fs.existsSync(animPath)) {
    css += `/* === animations.css === */\n`;
    css += fs.readFileSync(animPath, 'utf8') + '\n\n';
  }

  fs.mkdirSync(path.join(ROOT, 'tmpbuild'), { recursive: true });
  fs.writeFileSync(path.join(PUBLIC, 'css/main-premium.css'), css);
  console.log(`✅ CSS built: ${(css.length / 1024).toFixed(1)}KB`);
}

// --- JS Build ---
function buildJS() {
  let js = '';

  // 1. Utils first
  const utilsPath = path.join(SRC, 'js/utils.js');
  if (fs.existsSync(utilsPath)) {
    js += `/* === utils.js === */\n`;
    js += fs.readFileSync(utilsPath, 'utf8') + '\n\n';
  }

  // 2. Modules (alphabetical)
  const modules = getFilesFromDir(path.join(SRC, 'js/modules'), '.js');
  for (const file of modules) {
    js += `/* === modules/${path.basename(file)} === */\n`;
    js += fs.readFileSync(file, 'utf8') + '\n\n';
  }

  // 3. Main last
  const mainPath = path.join(SRC, 'js/main.js');
  if (fs.existsSync(mainPath)) {
    js += `/* === main.js === */\n`;
    js += fs.readFileSync(mainPath, 'utf8') + '\n\n';
  }

  fs.mkdirSync(path.join(PUBLIC, 'js'), { recursive: true });
  fs.writeFileSync(path.join(PUBLIC, 'js/app-premium.js'), js);
  console.log(`✅ JS built: ${(js.length / 1024).toFixed(1)}KB`);
}

// --- Run ---
console.log('🔨 Building LP Dra. Mariana Fiorotto...\n');
buildCSS();
buildJS();
console.log('\n🚀 Build complete!');
