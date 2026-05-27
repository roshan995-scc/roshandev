const fs = require('fs');
const content = fs.readFileSync('public/js/bundle-index.js', 'utf8');

const regex = /_add(?:DOM|Load)Listener\s*\(([\s\S]{0,100})/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log('MATCH FOUND:', match[0]);
}
