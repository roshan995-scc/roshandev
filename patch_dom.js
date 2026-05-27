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
  
  // Patch DOMContentLoaded as well
  const patch = `
window._addDOMListener = function(cb, opts) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') setTimeout(cb, 0);
  else window.addEventListener('DOMContentLoaded', cb, opts);
};
`;
  if (!c.includes('window._addDOMListener')) {
    c = patch + c;
  }
  
  c = c.replace(/window\.addEventListener\(\s*['"]DOMContentLoaded['"]\s*,/g, 'window._addDOMListener(');
  c = c.replace(/document\.addEventListener\(\s*['"]DOMContentLoaded['"]\s*,/g, 'window._addDOMListener(');
  
  fs.writeFileSync(file, c);
});
console.log('Patched DOMContentLoaded listeners');
