const fs = require('fs');
const path = require('path');

const baseUrl = 'https://lukebaffait.fr/';
const assetsToDownload = [
  'styles/index.css',
  'js/i18n.js',
  'js/core-renderer.js',
  'js/hero-project.js',
  'js/vendor/gsap.min.js',
  'js/vendor/ScrollTrigger.min.js',
  'js/vendor/lenis.min.js',
  'js/index.js'
];

async function downloadFile(filePath) {
  const url = baseUrl + filePath;
  console.log('Downloading', url);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const text = await res.text();
    
    // Save to public directory
    const destPath = path.join(__dirname, 'public', filePath);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.writeFileSync(destPath, text);
    console.log('Saved to', destPath);
  } catch (err) {
    console.error('Failed to download', url, err.message);
  }
}

async function run() {
  for (const asset of assetsToDownload) {
    await downloadFile(asset);
  }
}

run();
