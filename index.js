const {Builder, By, Key} = require('selenium-webdriver');
const XLSX = require('xlsx');
const nodeXlsx = require('node-xlsx')
const fs = require('fs')

async function run() { 
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://webapplayers.com/inspinia_admin-v2.9.4/table_data_tables.html');

    const showQuantity = await driver.findElement(By.xpath('//*[@id="DataTables_Table_0_length"]/label/select'));
    await showQuantity.click()
    await showQuantity.sendKeys('100', Key.ENTER)

    let table = await driver.findElement(By.css('table'));
    let rows = await table.findElements(By.css('tbody tr'));

    let data = [];

    for (let i = 0; i < rows.length; i++) {
        let rowData = {};
        let cells = await rows[i].findElements(By.css('td'));
        rowData['Column 1'] = await cells[0].getText();
        rowData['Column 2'] = await cells[1].getText();
        rowData['Column 3'] = await cells[2].getText();
        rowData['Column 4'] = await cells[3].getText();
        rowData['Column 5'] = await cells[4].getText();
        data.push(rowData);
    }

    console.log(data);

    let worksheet = XLSX.utils.json_to_sheet(data);
    let workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Table Data');
    await XLSX.writeFile(workbook, 'table-data.xlsx');
    
    await driver.get('http://webapplayers.com/inspinia_admin-v2.9.4/form_editors.html');
    const note = await driver.findElement(By.xpath('//*[@id="page-wrapper"]/div[3]/div[1]/div/div/div[2]/div[2]/div[3]/div[2]'));
    await note.clear()

    const workSheetsFromBuffer = nodeXlsx.parse(fs.readFileSync(`./table-data.xlsx`));
    const tableToRead = workSheetsFromBuffer[0].data

    tableToRead.forEach((row) => {
        note.sendKeys('- ', row.join(" "), ";", Key.ENTER)
    });
}

run();