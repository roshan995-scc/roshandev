const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request =>
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText)
  );

  console.log('Navigating to https://roshandev-lemon.vercel.app/ ...');
  await page.goto('https://roshandev-lemon.vercel.app/', { waitUntil: 'networkidle2' });
  
  console.log('Wait 2 seconds...');
  await new Promise(r => setTimeout(r, 2000));
  
  await browser.close();
})();
