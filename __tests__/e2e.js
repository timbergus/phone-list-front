const puppeteer = require('puppeteer');

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Here we go to our site address.

  await page.goto('http://localhost:5000');

  // And we take an screenshot of the login page.

  await page.screenshot({
    path: '__tests__/screenshots/login.png',
  });

  // Then we click on the login button and wait the network
  // to stop working.

  await Promise.all([
    page.click('[data-test="login-button"]'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

  // And we take an screenshot.

  await page.screenshot({
    path: '__tests__/screenshots/list.png',
  });

  // Then we click on one of the phone cards.

  await Promise.all([
    page.click('[data-test="phone-card-iPhone11 Pro"]'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

  // And we take an screenshot.

  await page.screenshot({
    path: '__tests__/screenshots/iPhone11 Pro.png',
  });

  // Then we click on the navigate back button.

  await Promise.all([
    page.click('[data-test="go-back-button"]'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

  // Then we click on one of the phone cards.

  await Promise.all([
    page.click('[data-test="phone-card-iPhoneXr"]'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

  // And we take an screenshot.

  await page.screenshot({
    path: '__tests__/screenshots/iPhone Xr.png',
  });

  // And we wait the browser to close.

  await browser.close();
};

main();
