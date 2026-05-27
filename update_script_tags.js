const fs = require('fs');

// 1. Remove scripts from layout.tsx
let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
layout = layout.replace(/<script defer src="\/js\/.*?"><\/script>\n/g, '');
fs.writeFileSync('src/app/layout.tsx', layout);

// 2. Replace scripts in page components
function updatePage(file, bundleName) {
  let content = fs.readFileSync(file, 'utf8');
  // Remove all existing <script defer src="..."></script>
  content = content.replace(/<script defer src=".*?"><\/script>\n\s*/g, '');
  // Insert <Script src="..." strategy="afterInteractive" />
  content = content.replace('</>', `\n      <Script src="/js/${bundleName}" strategy="afterInteractive" />\n    </>`);
  fs.writeFileSync(file, content);
}

updatePage('src/app/page.tsx', 'bundle-index.js');
updatePage('src/app/info/page.tsx', 'bundle-info.js');
updatePage('src/app/works/page.tsx', 'bundle-works.js');
updatePage('src/app/contact/page.tsx', 'bundle-contact.js');

console.log('Script tags updated.');
