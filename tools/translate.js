const puppeteer = require('puppeteer');

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

  console.log("Translation done, close browser", text);
  await browser.close();

  return translatedText.trim();
}

const toTranslate = "Résous les défis et tu seras prêt à vivre de manière autonome et responsable !";
const source_lang = "fr";

const fs = require('fs');

const baseLangPath = 'translations/messages.fr.yaml';
const baseLangContent = fs.readFileSync(baseLangPath, 'utf8');

fs.readdirSync('translations').forEach(file => {
  if(file.includes('messages') && !file.includes("fr.yaml")) {
    // extract lang from messages.fr.yaml
    const lang = file.split('.')[1];

    let contenuFichier = fs.readFileSync("translations/messages." + lang + ".yaml", 'utf8');
    if (!contenuFichier.includes("Bienvenue")){
      return;
    }

    const chainesExtraites = baseLangContent.match(/"([^"]*)"/g);

    let promises = []
    chainesExtraites.forEach((chaine) => {
        const chaineToTranslate = chaine.substring(1, chaine.length - 1);
        promises.push(translate(source_lang, lang, chaineToTranslate).then((translatedText) => {
          // replace text in file
          contenuFichier = contenuFichier.replace(chaine, '"' + translatedText + '"');
          console.log("Translation: ", translatedText);
        }));
    });

    return Promise.all(promises).then(() => {
      console.log(contenuFichier)
      fs.writeFileSync("translations/messages." + lang + ".yaml", contenuFichier);
    });
  }
});
