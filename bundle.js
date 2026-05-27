const fs = require('fs');

const commonScripts = [
  'public/js/i18n.js',
  'public/js/core-renderer.js',
  'public/js/hero-project.js',
  'public/js/vendor/gsap.min.js'
];

function bundleScripts(pageScripts, outputFile) {
  const allScripts = [...commonScripts, ...pageScripts];
  let bundleContent = '';
  for (const script of allScripts) {
    if (fs.existsSync(script)) {
      bundleContent += fs.readFileSync(script, 'utf8') + '\n;\n';
    } else {
      console.error('Missing script: ' + script);
    }
  }
  fs.writeFileSync(outputFile, bundleContent);
  console.log('Created ' + outputFile);
}

bundleScripts(['public/js/vendor/ScrollTrigger.min.js', 'public/js/vendor/lenis.min.js', 'public/js/index.js'], 'public/js/bundle-index.js');
bundleScripts(['public/js/info.js'], 'public/js/bundle-info.js');
bundleScripts(['public/js/works.js'], 'public/js/bundle-works.js');
bundleScripts(['public/js/contact.js'], 'public/js/bundle-contact.js');
