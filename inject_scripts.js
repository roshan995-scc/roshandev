const fs = require('fs');

function injectHeadAndScripts(filePath, cssFile, jsFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const cssLink = `<link rel="stylesheet" href="/styles/${cssFile}" />`;
  const scripts = jsFiles.map(js => `<Script src="/js/${js}" strategy="afterInteractive" />`).join('\n      ');
  
  // Inject before closing fragment </>
  content = content.replace('</>', `${scripts}\n    </>`);
  // Inject before first div or header
  content = content.replace('<>', `<>\n      ${cssLink}`);
  
  fs.writeFileSync(filePath, content);
}

// For home page
injectHeadAndScripts('src/app/page.tsx', 'index.css', ['vendor/ScrollTrigger.min.js', 'vendor/lenis.min.js', 'index.js']);

// For subpages
injectHeadAndScripts('src/app/info/page.tsx', 'info.css', ['info.js']);
injectHeadAndScripts('src/app/works/page.tsx', 'works.css', ['works.js']);
injectHeadAndScripts('src/app/contact/page.tsx', 'contact.css', ['contact.js']);

console.log('Injected scripts and css');
