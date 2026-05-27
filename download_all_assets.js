const fs = require('fs');
const path = require('path');
const https = require('https');

const baseUrl = 'https://lukebaffait.fr/';
let assets = [
  'assets/fonts/Breton.woff2',
  'assets/fonts/Machine.otf',
  'assets/favicon/favicon.ico',
  'assets/images/profile/me.jpg',
  'assets/images/projects/Covers/cyberDiag_web.avif',
  'assets/images/projects/Covers/Anima.avif',
  'assets/images/projects/Covers/CyberDiag.avif',
  'assets/images/projects/Covers/Zenith.avif',
  'assets/images/projects/Covers/SkymcDB.avif',
  'assets/images/projects/Covers/ChromaBlock.avif',
  'assets/images/projects/Covers/Symphony.avif',
  'assets/images/projects/Covers/Echo.avif',
  'assets/images/art/Untitled1.png',
  'assets/images/art/Untitled2.png',
  'assets/images/shader%20background/background.png'
];

for (let i = 1; i <= 341; i++) {
  assets.push(`assets/images/hero%20sequence/${String(i).padStart(4, '0')}.jpg`);
}

function downloadFile(assetPath) {
  return new Promise((resolve, reject) => {
    const destPath = path.join(__dirname, 'public', decodeURIComponent(assetPath));
    if (fs.existsSync(destPath)) {
      return resolve();
    }
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    const url = baseUrl + assetPath;
    
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => reject(err));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log(`Downloading ${assets.length} assets...`);
  // Download in batches of 10
  for (let i = 0; i < assets.length; i += 20) {
    const batch = assets.slice(i, i + 20);
    await Promise.all(batch.map(a => downloadFile(a).catch(e => console.error(e.message))));
    console.log(`Progress: ${Math.min(i + 20, assets.length)} / ${assets.length}`);
  }
  console.log('All downloads completed.');
}

run();
