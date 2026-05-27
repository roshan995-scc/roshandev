const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  await page.goto('https://roshandev-lemon.vercel.app/', { waitUntil: 'networkidle2' });
  
  const state = await page.evaluate(() => {
    return {
      readyState: document.readyState,
      hasGsap: !!window.gsap,
      hasHeroData: !!window._heroProjectData,
      introBgDisplay: document.getElementById('intro-bg') ? getComputedStyle(document.getElementById('intro-bg')).display : 'missing',
      hasScript: !!document.querySelector('script[src*="bundle-index"]'),
      scriptSrc: document.querySelector('script[src*="bundle-index"]') ? document.querySelector('script[src*="bundle-index"]').src : null
    };
  });
  
  console.log('PAGE STATE:', state);
  
  await browser.close();
})();
