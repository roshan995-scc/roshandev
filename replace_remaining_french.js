const fs = require('fs');
const path = require('path');

function replaceFrenchText(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  const replacements = [
    // Image ALTs
    [/alt="CyberDiag — website"/g, 'alt="CyberDiag — website"'],
    [/alt="Anima — animal rights website"/g, 'alt="Anima — animal rights website"'],
    [/alt="CyberDiag — desktop cybersecurity app"/g, 'alt="CyberDiag — desktop cybersecurity app"'],
    [/alt="Zenith — web browser"/g, 'alt="Zenith — web browser"'],
    [/alt="SkymcDB — tool for Minecraft builders"/g, 'alt="SkymcDB — tool for Minecraft builders"'],
    [/alt="ChromaBlock — web version of SkymcDB"/g, 'alt="ChromaBlock — web version of SkymcDB"'],
    [/alt="Symphony — music web application"/g, 'alt="Symphony — music web application"'],
    [/alt="Echo — local conversational AI interface"/g, 'alt="Echo — local conversational AI interface"'],
    
    // Other texts
    [/MotivAc A rejoindre une team innovante et A contribuer A des projets ambitieux\./g, 'Motivated to join an innovative team and contribute to ambitious projects.'],
    [/Creative developer, axAc animation, interaction, et experiences web sur mesure\./g, 'Creative developer, focused on animation, interaction, and tailor-made web experiences.']
  ];

  for (const [regex, replacement] of replacements) {
    content = content.replace(regex, replacement);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (file === 'node_modules' || file === '.next') continue;
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.tsx') || fullPath.endsWith('.html')) {
      replaceFrenchText(fullPath);
    }
  }
}

processDirectory(__dirname);
console.log("Done");
