import puppeteer from 'puppeteer';

async function getPage() {
  const browser = await puppeteer.launch();
  return [await browser.newPage(), browser];
}

async function getLanguagesLocale() {
  const d = await getPage();
  const page = d[0];
  const browser = d[1];

  await page.goto("https://translate.google.com/?sl=fr&tl=en&op=translate");
  await acceptCookies(page);
  // await page.screenshot({path: 'example.png'});
  console.log("screen done");
  await browser.close();
}

async function acceptCookies(page) {
  const acceptAllBtnSelector = "button[aria-label='Accept all']";
  await page.waitForSelector(acceptAllBtnSelector);
  await page.click(acceptAllBtnSelector);
  await page.waitForNavigation();
  console.log("Cookies accepted");
}

async function translate(source_lang, target_lang, text) {
  const d = await getPage();
  const page = d[0];
  const browser = d[1];

  const url_template = "https://translate.google.com/?sl=%s&tl=%s&text=%s&op=translate";
  const url = url_template.replace("%s", source_lang).replace("%s", target_lang).replace("%s", text);

  await page.goto(url);
  await acceptCookies(page);

  console.log("Page loaded, wait for translation")
  // await page.screenshot({path: 'example.png'});

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Wait and click on first result
  let searchResultSelector = 'span[lang="%s"]';
  searchResultSelector = searchResultSelector.replace("%s", target_lang);

  let translatedText = "";
  do {
    // fs.mkdirSync('tools/screen', { recursive: true })
    // await page.screenshot({path: 'tools/screen/'+target_lang+'.png'});
    const textSelector = await page.waitForSelector(
      searchResultSelector
    );
    translatedText = await textSelector?.evaluate(el => el.innerText);
    // sleep 0.5 sec
    await page.waitForTimeout(500);
  } while (translatedText === "Detect language")

  console.log("Translation done, close browser");
  await browser.close();

  return translatedText;
}

const toTranslate = "Je m’appelle Jessica. Je suis une fille, je suis française et j’ai treize ans. Je vais à l’école à Nice, mais j’habite à Cagnes-Sur-Mer. J’ai deux frères. Le premier s’appelle Thomas, il a quatorze ans. Le second s’appelle Yann et il a neuf ans. Mon papa est italien et il est fleuriste. Ma mère est allemande et est avocate. Mes frères et moi parlons français, italien et allemand à la maison. Nous avons une grande maison avec un chien, un poisson et deux chats.";
const source_lang = "fr";

await translate(source_lang, "en", toTranslate).then((translatedText) => {
  console.log("Translation: ", translatedText);
});
getLanguagesLocale();