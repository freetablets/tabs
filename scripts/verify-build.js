const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const required = [
  'index.html',
  'how-tablet-assistance-works/index.html',
  'provider-comparison-guide/index.html',
  'eligibility-and-documents/index.html',
  'about-this-resource/index.html',
  'assets/css/styles.css',
  'assets/js/main.js',
  'robots.txt',
  'sitemap.xml'
];

if (!fs.existsSync(publicDir)) {
  console.error('Build failed: public directory is missing.');
  process.exit(1);
}

const missing = required.filter(file => !fs.existsSync(path.join(publicDir, file)));
if (missing.length) {
  console.error('Build failed. Missing files:', missing.join(', '));
  process.exit(1);
}

console.log('Static site verified. Vercel output directory: public');
