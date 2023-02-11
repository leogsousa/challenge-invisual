const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const service =()=> chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

async function run() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://webapplayers.com/inspinia_admin-v2.9.4/table_data_tables.html');
    const excelButton = await driver.findElement(By.xpath('//*[@id="DataTables_Table_0_wrapper"]/div[1]/div/button[3]'));
    await excelButton.click();
}

run();