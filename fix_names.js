const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');
c = c.replace('<div id="preloader-logo">L</div>', '<div id="preloader-logo">R</div>');
c = c.replace('<span id="preloader-luke">uke</span>', '<span id="preloader-luke">oshan</span>');
c = c.replace('<span className="first-letter">L</span>uke', '<span className="first-letter">R</span>oshan');
fs.writeFileSync('src/app/page.tsx', c);
console.log('Fixed names');
