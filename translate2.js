const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  const replacements = {
    "roshan.sha@example.com": "roshansha2021@gmail.com",
    "A? la recherche d'une": "Looking for an",
    "alternance": "opportunity",
    "A partir de septembre.": "starting from September.",
    "MotivAc A rejoindre une Acquipe innovante et A contribuer A des projets ambitieux.": "Motivated to join an innovative team and contribute to ambitious projects.",
    "Je suis disponible pour": "I am available for",
    "des missions en freelance": "freelance missions",
    "partout dans le monde, sur": "worldwide, on",
    "vos projets ambitieux": "your ambitious projects",
    "et des collaborations internationales.": "and international collaborations.",
    "RAcseaux sociaux": "Social networks",
    "Send un mail": "Send an email",
    "Navigation pied de page": "Footer navigation",
    "dYRETOUR": "<- BACK",
    "SystA\"me & SAccuritAc": "System & Security",
    "Ac 2026": "© 2026",
    // Mangled French chars
    "A": "à",
    "Ac": "é",
    "A\"": "è",
    "A?": "À",
    "A\\\"s": "ès"
  };

  for (const [fr, en] of Object.entries(replacements)) {
    content = content.replace(new RegExp(fr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), en);
  }

  // A more robust translation for typical French words that might remain
  content = content.replace(/Découvrez mes réalisations en détail/g, 'Discover my projects in detail');
  content = content.replace(/Contactez-moi/g, 'Contact me');
  content = content.replace(/Accueil/g, 'Home');

  fs.writeFileSync(filePath, content);
}

const files = [
  'src/app/page.tsx', 
  'src/app/info/page.tsx', 
  'src/app/works/page.tsx', 
  'src/app/contact/page.tsx',
  'src/app/layout.tsx',
  'public/js/bundle-index.js',
  'public/js/bundle-info.js',
  'public/js/bundle-works.js',
  'public/js/bundle-contact.js'
];

files.forEach(f => replaceInFile(f));
console.log('Final English translation applied');
