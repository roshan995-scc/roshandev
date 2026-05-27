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
  
  // Replace window.addEventListener('load', ...)
  // We can just use a trick: redefine window._addLoadListener
  const patch = `
window._addLoadListener = function(cb, opts) {
  if (document.readyState === 'complete') setTimeout(cb, 0);
  else window.addEventListener('load', cb, opts);
};
`;
  if (!c.includes('window._addLoadListener')) {
    c = patch + c;
  }
  
  c = c.replace(/window\.addEventListener\(\s*['"]load['"]\s*,/g, 'window._addLoadListener(');
  
  fs.writeFileSync(file, c);
});
console.log('Patched window load listeners');
