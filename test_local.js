const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching Puppeteer to connect to localhost:3000...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log(`[BROWSER CONSOLE] ${msg.type().toUpperCase()}: ${msg.text()}`);
  });
  page.on('pageerror', err => {
    console.log(`[BROWSER ERROR] ${err.message}`);
  });

  console.log('Navigating to localhost:3000...');
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  } catch (err) {
    console.log('Navigation timeout or error:', err.message);
  }

  console.log('Waiting 5 seconds for animations...');
  await new Promise(r => setTimeout(r, 5000));

  const state = await page.evaluate(() => {
    return {
      hasGsap: !!window.gsap,
      hasHeroData: !!window._heroProjectData,
      introBgDisplay: document.getElementById('intro-bg') ? getComputedStyle(document.getElementById('intro-bg')).display : 'missing',
      tPanelDarkDisplay: document.getElementById('t-panel-dark') ? getComputedStyle(document.getElementById('t-panel-dark')).transform : 'missing'
    };
  });

  console.log('PAGE STATE:', state);

  await browser.close();
  console.log('Done.');
})();
