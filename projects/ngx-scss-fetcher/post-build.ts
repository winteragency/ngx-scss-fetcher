
const fs = require('fs');
const extra = require('fs-extra')
const settings = require('./package.json');

// Copy css file to fist on build

fs.copyFileSync('./src/main.scss', './dist/main.scss');

// Copy readme to dist

fs.copyFileSync('../../README.md', './dist/README.md');

// Add dist to project dist

extra.copy('./dist', `../../dist/${settings.name}`);