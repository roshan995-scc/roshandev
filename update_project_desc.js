const fs = require('fs');
const files = ['public/js/works.js', 'public/js/index.js', 'public/js/bundle-works.js', 'public/js/bundle-index.js'];
const msg = 'Coming Soon! (Projects displayed temporarily for aesthetics)';
files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content.replace(/desc:\s*\"[^\"]+\"/g, 'desc: "' + msg + '"');
  if (newContent !== content) {
    fs.writeFileSync(f, newContent);
    console.log('Updated ' + f);
  }
});
console.log('Done');
