class bioPO{

    get dragMenu() {
        return $("~Drag");
      }
      get congratulationsText() {
        return $('//XCUIElementTypeStaticText[@name="Congratulations"]');
      }
      public getSourceItems() {
        const draggable: string[] = [
          "~drag-l1",
          "~drag-l2",
          "~drag-l3",
          "~drag-c1",
          "~drag-c2",
          "~drag-c3",
          "~drag-r1",
          "~drag-r2",
          "~drag-r3",
        ];
        return draggable;
      }
    
      public getTargetItems() {
        const droppable: string[] = [
          "~drop-l1",
          "~drop-l2",
          "~drop-l3",
          "~drop-c1",
          "~drop-c2",
          "~drop-c3",
          "~drop-r1",
          "~drop-r2",
          "~drop-r3",
        ];
    
        return droppable;
      }
      get biomatric() {
        return $('//XCUIElementTypeOther[@name="󰈷"]');
      }
}
export default new bioPO();