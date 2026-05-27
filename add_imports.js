const fs = require('fs');
['src/app/info/page.tsx', 'src/app/works/page.tsx', 'src/app/contact/page.tsx'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  if (!c.includes("import Script")) {
    c = c.replace(/import { useEffect } from 'react';/, "import { useEffect } from 'react';\nimport Script from 'next/script';");
    fs.writeFileSync(f, c);
  }
});
console.log('Imports added');
