const fs = require('fs');
const path = require('path');

function replaceImageRef(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  content = content.replace(/me\.avif/g, 'me.jpg');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (file === 'node_modules' || file === '.next') continue;
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.tsx') || fullPath.endsWith('.html')) {
      replaceImageRef(fullPath);
    }
  }
}

processDirectory(__dirname);
console.log("Done replacing me.jpg with me.jpg");
