const fs = require('fs');
const path = require('path');

function createPage(sourceFile, destDir, customReplace) {
  if (!fs.existsSync(sourceFile)) {
    console.log(`Skipping ${sourceFile} (not found)`);
    return;
  }
  let html = fs.readFileSync(sourceFile, 'utf8');
  
  // Extract body contents
  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
  if (!bodyMatch) throw new Error("Body not found in " + sourceFile);
  
  let body = bodyMatch[1];
  
  // Remove script tags, we'll keep them in layout.tsx or a separate component?
  // Wait, info.html has `<script defer src="js/info.js"></script>`. 
  // We need to inject these specific scripts. Let's just remove them from JSX 
  // and manually add Next.js <Script> tags.
  const scriptsMatches = [...body.matchAll(/<script[\s\S]*?src="([^"]+)"[\s\S]*?<\/script>/g)];
  body = body.replace(/<script[\s\S]*?<\/script>/g, '');
  
  // Global replacements
  body = body.replace(/Luke Baffait/g, 'Roshan Sha');
  body = body.replace(/Luke/g, 'Roshan');
  body = body.replace(/Baffait/g, 'Sha');
  body = body.replace(/luke\.baffait@yahoo\.com/g, 'roshansha2021@gmail.com');
  body = body.replace(/luke-baffait/g, 'roshan-sha');
  
  // Custom replacements
  if (customReplace) body = customReplace(body);
  
  // HTML to JSX
  body = body.replace(/class="/g, 'className="');
  body = body.replace(/for="/g, 'htmlFor="');
  body = body.replace(/crossorigin/g, 'crossOrigin=""');
  body = body.replace(/viewBox/g, 'viewBox');
  body = body.replace(/preserveAspectRatio/g, 'preserveAspectRatio');
  body = body.replace(/decoding="async"/g, 'decoding="async"');
  
  body = body.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  body = body.replace(/<br>/g, '<br />');
  body = body.replace(/<path([^>]*[^\/])>/g, '<path$1 />');
  body = body.replace(/<svg([^>]*[^\/])>/g, '<svg$1>');
  body = body.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  
  body = body.replace(/style="([^"]*)"/g, (match, p1) => {
    const styleObj = p1.split(';').reduce((acc, rule) => {
      if (!rule.trim()) return acc;
      const [key, value] = rule.split(':').map(s => s.trim());
      const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      acc[camelKey] = value;
      return acc;
    }, {});
    return `style={${JSON.stringify(styleObj)}}`;
  });
  
  // Collect scripts to append
  let scriptTags = scriptsMatches.map(m => {
    const src = m[1].startsWith('js/') ? '/' + m[1] : m[1];
    return `<Script src="${src}" strategy="afterInteractive" />`;
  }).join('\n      ');
  
  const pageTsx = `
'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
${body}
      ${scriptTags}
    </>
  );
}
`;

  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(path.join(destDir, 'page.tsx'), pageTsx);
  console.log(`Created ${destDir}/page.tsx`);
}

// Info page replacements
createPage('info.html', 'src/app/info', (body) => {
  let b = body;
  b = b.replace('Vannes, France', 'Jalpaiguri, West Bengal, India');
  b = b.replace("En recherche d'alternance", 'Student (20 years old)');
  b = b.replace('étudiant en informatique, spécialisé en développement web', '1st Year B.Tech in CSE at a Tier-3 Engineering College in India');
  return b;
});

// Works page replacements
createPage('works.html', 'src/app/works', null);

// Contact page replacements
createPage('contact.html', 'src/app/contact', null);
