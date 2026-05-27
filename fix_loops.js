const fs = require('fs');

const jsFiles = ['public/js/bundle-index.js', 'public/js/bundle-works.js', 'public/js/bundle-info.js', 'public/js/bundle-contact.js'];

jsFiles.forEach(f => {
  if (fs.existsSync(f)) {
    let text = fs.readFileSync(f, 'utf8');
    
    // Fix _addDOMListener infinite loop
    text = text.replace(
      /else window\._addDOMListener\(\s*cb,\s*opts\);/g,
      "else document.addEventListener('DOMContentLoaded', cb, opts);"
    );
    
    // Fix _addLoadListener infinite loop
    text = text.replace(
      /else window\._addLoadListener\(\s*cb,\s*opts\);/g,
      "else window.addEventListener('load', cb, opts);"
    );
    
    fs.writeFileSync(f, text);
    console.log('Fixed loop in ' + f);
  }
});
