const fs = require('fs');
const path = require('path');

function replaceTernary(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace `isEn ? "Eng" : "Fre"` with `"Eng"`
  // We'll use a regex that matches `isEn \? ("(?:[^"\\]|\\.)*") : "(?:[^"\\]|\\.)*"`
  // and `isEn \? ('(?:[^'\\]|\\.)*') : '(?:[^'\\]|\\.)*'`
  
  let newContent = content.replace(/isEn\s*\?\s*("(?:[^"\\]|\\.)*")\s*:\s*"(?:[^"\\]|\\.)*"/g, '$1');
  newContent = newContent.replace(/isEn\s*\?\s*('(?:[^'\\]|\\.)*')\s*:\s*'(?:[^'\\]|\\.)*'/g, '$1');

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.js')) {
      replaceTernary(fullPath);
    }
  }
}

processDirectory(path.join(__dirname, 'public', 'js'));
processDirectory(path.join(__dirname, 'src'));

console.log("Done");
