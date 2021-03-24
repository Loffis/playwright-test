const { firefox } = require('playwright');
const base64Encode = require('image-to-base64');

var url = process.env.SCREENSHOTURL;
console.log(`URL: ${url}`);

let base64String = "";

// Get screenshot
(async() => {
    date = Date.now();
    path = `./save/screenshot${date}.png`;
    const browser = await firefox.launch({ headless: true, slowMo: 500 });
    const page = await browser.newPage();
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.goto(url);
    await page.screenshot({ path: path });
    await browser.close();
    await encode();
    console.log(`Length of base64 encoded image '${path}':  ${base64String.length}`);
})();

// Base64 encode PNG
const encode = async() => {
    base64Encode(path)
        .then((response) => {
            base64String = response;
        })
        .catch(
            (error) => {
                console.log(error);
            }
        )
};