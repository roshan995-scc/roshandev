const fs = require('fs');

function translate(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  const replacements = {
    "A? la recherche d'une": "Looking for an",
    "A la recherche d'une": "Looking for an",
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
    "Bases de donnAces": "Databases",
    "DevOps & Outils": "DevOps & Tools",
    "Acquipe": "team",
    "A\\u00A0 la recherche d'une": "Looking for an",
    "A\\? la recherche d'une": "Looking for an"
  };

  for (const [fr, en] of Object.entries(replacements)) {
    content = content.replace(new RegExp(fr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), en);
  }

  // Handle some manual edge cases that might have special chars
  content = content.replace(/SystA"me & SAccuritAc/g, 'System & Security');
  content = content.replace(/A\? la recherche d'une/g, 'Looking for an');
  
  fs.writeFileSync(filePath, content);
}

const files = [
  'src/app/page.tsx', 
  'src/app/info/page.tsx', 
  'src/app/works/page.tsx', 
  'src/app/contact/page.tsx',
  'src/app/layout.tsx'
];

files.forEach(f => translate(f));
console.log('Final English translation applied correctly.');
