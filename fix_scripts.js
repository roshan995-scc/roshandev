const fs = require('fs');
const files = [
  'src/app/page.tsx', 
  'src/app/info/page.tsx', 
  'src/app/works/page.tsx', 
  'src/app/contact/page.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  // replace <Script src="..." strategy="afterInteractive" /> with <script defer src="..."></script>
  c = c.replace(/<Script src="([^"]+)" strategy="afterInteractive" \/>/g, '<script defer src="$1"></script>');
  // Also remove import Script from 'next/script'; if present
  c = c.replace(/import Script from 'next\/script';/g, '');
  fs.writeFileSync(f, c);
});
console.log('Fixed scripts');
