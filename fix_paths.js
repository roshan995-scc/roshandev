const fs = require('fs');
const files = ['src/app/page.tsx', 'src/app/works/page.tsx', 'src/app/info/page.tsx', 'src/app/contact/page.tsx'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let text = fs.readFileSync(f, 'utf8');
    let newText = text.replace(/\"assets\//g, '"/assets/');
    if(text !== newText) {
      fs.writeFileSync(f, newText);
      console.log('Updated ' + f);
    }
  }
});
const jsFiles = ['public/js/bundle-index.js', 'public/js/bundle-works.js', 'public/js/bundle-info.js', 'public/js/bundle-contact.js'];
jsFiles.forEach(f => {
  if (fs.existsSync(f)) {
    let text = fs.readFileSync(f, 'utf8');
    let newText = text.replace(/['"]assets\//g, match => match[0] + '/assets/');
    if(text !== newText) {
      fs.writeFileSync(f, newText);
      console.log('Updated ' + f);
    }
  }
});
