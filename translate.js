const fs = require('fs');
const path = require('path');

function replaceTranslations(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  const replacements = {
    "Développeur créatif spécialisé en interfaces web": "Creative developer specialized in web interfaces",
    "Découvrez mes réalisations": "Discover my projects",
    "Retour à l'accueil": "Back to home",
    "À propos": "About",
    "Projets": "Projects",
    "Voir le projet": "View project",
    "En savoir plus": "Learn more",
    "Basé à": "Based in",
    "Statut": "Status",
    "Sécurité &amp; Outils": "Security & Tools",
    "Légal": "Legal",
    "Tous droits réservés.": "All rights reserved.",
    "Prêt à créer l'exceptionnel ?": "Ready to create the exceptional?",
    "Laissez-moi un message": "Leave me a message",
    "Votre Nom": "Your Name",
    "Votre Email": "Your Email",
    "Votre Message": "Your Message",
    "Envoyer le message": "Send message",
    "Envoyer": "Send",
    "Mentions Légales": "Legal Notice",
    "Accueil": "Home",
    "Contactez-moi": "Contact me",
    "Informations": "Information",
    "Je conçois des expériences web sur mesure, où la précision technique rencontre": "I design tailor-made web experiences, where technical precision meets",
    "l'émotion. Passionné par l'animation, l'interaction et le": "emotion. Passionate about animation, interaction and",
    "je cherche toujours la symbiose entre l'art et l'information.": "I always seek the symbiosis between art and information.",
    "Développeur": "Developer",
    "Réalisations": "Works",
    "Infos": "Info"
  };

  for (const [fr, en] of Object.entries(replacements)) {
    content = content.replace(new RegExp(fr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), en);
  }

  // Handle data-i18n attributes. i18n.js might still run and override our text with French!
  // We should remove data-i18n attributes to prevent the script from reverting them to French.
  content = content.replace(/data-i18n="[^"]*"/g, '');
  content = content.replace(/data-i18n-title="[^"]*"/g, '');

  fs.writeFileSync(filePath, content);
}

const files = [
  'src/app/page.tsx', 
  'src/app/info/page.tsx', 
  'src/app/works/page.tsx', 
  'src/app/contact/page.tsx'
];

files.forEach(f => replaceTranslations(f));
console.log('Translations applied and data-i18n removed.');
