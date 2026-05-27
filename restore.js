const fs = require('fs');
const glob = require('fs').readdirSync; // We'll just manually list them to be safe
const files = [
  'src/app/page.tsx', 
  'src/app/info/page.tsx', 
  'src/app/works/page.tsx', 
  'src/app/contact/page.tsx',
  'src/app/layout.tsx',
  'public/js/bundle-index.js',
  'public/js/bundle-info.js',
  'public/js/bundle-works.js',
  'public/js/bundle-contact.js'
];

function restoreFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Reverse replacements
  const reverseMap = {
    "à": "A",
    "é": "Ac",
    "è": "A\"",
    "À": "A?",
    "ès": "A\"s"
  };

  // Replace each one
  for (const [bad, good] of Object.entries(reverseMap)) {
    content = content.replace(new RegExp(bad, 'g'), good);
  }

  fs.writeFileSync(filePath, content);
}

files.forEach(f => restoreFile(f));
console.log('Restored corrupted characters.');
