import bioPO from '../pageobjects/biomatricPO';
import formPo from '../pageobjects/formPo';
const Excel = require('exceljs');

class TestHelpers {
  async waitForElementToDisplayed(
    element: WebdriverIO.Element,
    timeout = 20000
  ) {
    await element.waitForDisplayed({ timeout });
  }
  async waitForElementAndClick(element: WebdriverIO.Element, timeout = 20000) {
    await element.waitForDisplayed({ timeout });
    await element.click();
  }

  async getEl(selector: string) {
    const element = await $(selector);
    return element;
  }
 
  async dragAndDrop() {
    const sourceItems: string[] = bioPO.getSourceItems();
    const targetItems: string[] = bioPO.getTargetItems();
    for (let i: number = 0; i < sourceItems.length; i++) {
      const sourceItem = await this.getEl(sourceItems[i]);
      const targetItem = await this.getEl(targetItems[i]);
      await driver.execute("gesture: dragAndDrop", {
        sourceId: sourceItem,
        destinationId: targetItem,
      });
      await driver.pause(200);
    }
  }

 async scroll(name: string){
  
    await driver.execute(
      "mobile: scroll",
      {
        name: name,
        //direction: direction
      },
    );
 }

 async swipe() {
  //for (let i=0; i<scrollnumber; i++){
  await driver.execute("mobile: swipe",
  {
    elemntId: await $('~COMPATIBLE').elementId,
    direction: 'left',
  
  });
//}
}


   getDateTimeString(): string {
    const now = new Date();
  
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad with leading zero
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const timestamp = `${year}${month}${day}-${hours}${minutes}${seconds}`;
  
    return timestamp;
  }

  async readDataFromExcel(filePath:string, sheetName:string) {
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(sheetName);
  
    const data:any = [];
    worksheet.eachRow((row:any, rowNumber:number) => {
      if (rowNumber > 1) { // Skip the header row
        data.push(row.getCell(1).value.toString()); // Assuming the mobile numbers are in the first column
      } 
    });
    return data;
  }
  // const filePath = path.join(__dirname, '../data/bansari_login.xlsx');
  //   const sheetName = 'login';

  //   //Read file
  //   const mobileNumber= await HelperClass.readDataFromExcel(filePath, sheetName);
}
export default new TestHelpers;





