const fs = require('fs');

const files = [
  'public/js/bundle-index.js',
  'public/js/bundle-info.js',
  'public/js/bundle-works.js',
  'public/js/bundle-contact.js'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let c = fs.readFileSync(file, 'utf8');
  
  // Replace A"s with A\"s
  c = c.replace(/accA"s\./g, 'accA\\"s.');
  
  fs.writeFileSync(file, c);
});
console.log('Fixed syntax error in bundles.');
