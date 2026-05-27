const fs = require('fs');
const path = require('path');

function updateSocials(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace LinkedIn
  content = content.replace(/https:\/\/www\.linkedin\.com\/in\/roshan-sha\/?/g, 'https://www.linkedin.com/in/roshansha150/');
  
  // Replace GitHub
  content = content.replace(/https:\/\/github\.com\/SkyNigh1\/?/g, 'https://github.com/roshan995-scc');

  // Remove Behance links (various formats)
  // Format 1: <li><a ... Behance</a></li>
  content = content.replace(/\s*<li><a[^>]*href="https:\/\/www\.behance\.net[^>]*>Behance<\/a><\/li>/g, '');
  
  // Format 2: <a ... Behance ... ></a>
  // sometimes followed by a separator or preceded by one
  content = content.replace(/\s*<a[^>]*data-chr(?:-\w+)?="Behance"[^>]*><\/a>/g, '');
  content = content.replace(/\s*<a[^>]*aria-label="Behance"[^>]*><\/a>/g, '');

  // Remove the dangling separator span if it exists (e.g. at the start of nav)
  content = content.replace(/(<nav[^>]*>)\s*<span className="sep" aria-hidden="true">\/<\/span>/g, '$1');

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
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.html')) {
      updateSocials(fullPath);
    }
  }
}

processDirectory(__dirname);
console.log("Done updating socials");
