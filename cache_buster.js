const fs = require('fs');

const files = [
  'src/app/page.tsx',
  'src/app/works/page.tsx',
  'src/app/info/page.tsx',
  'src/app/contact/page.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/src="\/js\/bundle-(.*?)\.js"/g, 'src="/js/bundle-$1.js?v=2"');
    fs.writeFileSync(f, content);
    console.log('Updated ' + f);
  }
});
