const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Extract body contents between <body> and </body>
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
if (!bodyMatch) throw new Error("Body not found");

let body = bodyMatch[1];

// Remove script tags at the bottom, we'll add them via next/script in layout
body = body.replace(/<script[\s\S]*?<\/script>/g, '');
// Remove the timeline/scroll-pct which we can keep or not, yes keep them
// Wait, the script tags are inside body, so they were removed. Good.

// Replace text content
body = body.replace(/Luke Baffait/g, 'Roshan Sha');
body = body.replace(/Luke/g, 'Roshan');
body = body.replace(/Baffait/g, 'Sha');
body = body.replace(/luke\.baffait@yahoo\.com/g, 'roshan.sha@example.com');
body = body.replace(/luke-baffait/g, 'roshan-sha');

// HTML to JSX conversions
body = body.replace(/class="/g, 'className="');
body = body.replace(/for="/g, 'htmlFor="');
body = body.replace(/crossorigin/g, 'crossOrigin=""');
body = body.replace(/viewBox/g, 'viewBox');
body = body.replace(/preserveAspectRatio/g, 'preserveAspectRatio');
body = body.replace(/decoding="async"/g, 'decoding="async"');
// Fix self-closing tags (img, input, hr, br, path, meta, link, source)
body = body.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
body = body.replace(/<br>/g, '<br />');
body = body.replace(/<path([^>]*[^\/])>/g, '<path$1 />');
body = body.replace(/<svg([^>]*[^\/])>/g, '<svg$1>');

// There might be some styles inside svg
body = body.replace(/style="([^"]*)"/g, (match, p1) => {
  // Very hacky style to object converter just for the SVG inline styles
  const styleObj = p1.split(';').reduce((acc, rule) => {
    if (!rule.trim()) return acc;
    const [key, value] = rule.split(':').map(s => s.trim());
    const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
    acc[camelKey] = value;
    return acc;
  }, {});
  return `style={${JSON.stringify(styleObj)}}`;
});

// Construct page.tsx
const pageTsx = `
'use client';
import { useEffect } from 'react';

export default function Home() {
  return (
    <>
${body}
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', pageTsx);
console.log('src/app/page.tsx created');
