const {chromium} = require('@playwright/test');

(async () => {
    // Creating the browser
    const browser = await chromium.launch({
        headless: false,
        channel: "msedge"
    });

    // Browser Instance
    const browserInstance = await browser.newContext();

    //Page
    const page = await browserInstance.newPage();

    //Navigate Google
    await page.goto("https://google.com");
    await browser.close();
})();