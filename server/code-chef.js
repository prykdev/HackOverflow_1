const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const axios = require('axios');

async function snapScreenshot() {
  try {
    const URL = 'https://www.codechef.com/users/redstar05'
    const page = await axios(URL);
    // console.log(page.data);
    const $ = cheerio.load(page.data);
    const html = $('title');
    // console.log(html.text());
    console.log($('div.widget-rating > div.content').text());
    // const browser = await puppeteer.launch()
    // const page = await browser.newPage()

    // await page.goto(URL)
    // await page.screenshot({ path: 'screenshot.png' })

    // await browser.close()
  } catch (error) {
    console.error(error)
  }
}

snapScreenshot()