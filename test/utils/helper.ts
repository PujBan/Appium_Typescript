class TestHelpers {
  /**
   * Checks if a toast message with the specified text is displayed on the screen.
   * This function attempts to find the toast message by inspecting the page source multiple times,
   * as toast messages might not be immediately available in the DOM when they appear.
   * The function will pause for a short duration between attempts to give time for the toast
   * to be fully rendered in the DOM.
   *
   * @param {string} toastText - The text of the toast message to check for.
   * @returns {boolean} - Returns `true` if the toast message is displayed, otherwise `false`.
   */
  async isToastMessageDisplayed(toastText: string): Promise<boolean> {
    const numberOfAttempts = 12; // Adjust the number of attempts as needed
    const waitTime = 200; // Adjust the wait time between attempts in milliseconds

    for (let i = 0; i < numberOfAttempts; i++) {
      await driver.pause(waitTime);
      const pageSource = await driver.getPageSource();
      if (pageSource.includes(toastText)) {
        console.log(`Toast message displayed ${i + 1}: ${toastText}`);
        return true;
      }
    }
    return false;
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





