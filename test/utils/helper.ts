import bioPO from '../pageobjects/biomatricPO';

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

  async swipe(){
    const scrollView = $('//XCUIElementTypeStaticText[@name="Swipe horizontal"]')
    const centerX = scrollView.x + (scrollView.width /2);
    const startY = scrollView.y + (scrollView.hight *0.9);
    const endY = scrollView.y 
     for(let scrolls: number = 0; scrolls<5; scrolls++){
      await driver.performActions([
        {
          type:'pointer',
          id:'finger1',
          parameters:{pointerType: 'touch'},
          actions:[
            {type: 'pointerMove', duration:0, x:centerX, Y:startY},
            {type: 'pointerDown', button:0},
            {type: 'pause', duration:100},
            {type: 'pointerMove', duration:500, x:centerX, Y:endY},
            {type: 'pointerUp', button:0},
          ],
        },
      ])
     }
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
}
export default new TestHelpers;





