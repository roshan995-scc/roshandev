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
  
  // Replace A" inside words with A\"
  // e.g. particuliA"re -> particuliA\"re
  // e.g. SystA"me -> SystA\"me
  c = c.replace(/([a-zA-Z])A"([a-zA-Z])/g, '$1A\\"$2');
  
  fs.writeFileSync(file, c);
});
console.log('Fixed syntax error in bundles again.');
