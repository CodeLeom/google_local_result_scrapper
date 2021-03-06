const GoogleLocalResultScrapper = require('./GoogleLocalResultScrapper');

/**
 * This example searches for companies in Lekki, Lagos Nigeria.
 */

(async ()=>{
    const bot = new GoogleLocalResultScrapper();

    try {
        await bot.initPuppeteer(false);

        const query = 'Companies in Lekki';

        const records = await bot.visitGoogle(query, 1);

        await bot.saveAsJson({records, file_name: query});

        GoogleLocalResultScrapper.logDataStats(records);

    }catch (e) {
        console.error(e)
    }
    await bot.closeBrowser();

})();
