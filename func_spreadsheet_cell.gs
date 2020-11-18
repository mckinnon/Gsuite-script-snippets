/* 
  Functions to open spreadsheets and return values from specified cells
*/

// Declare variables.
function run() {
  var spreadsheetId = "1SSwW_EGlm...a6yz_f";  // user-specified spreadsheet
  var tabNumber = 0;                          // user-specified tab
  var row = 1;                                // user-specified row
  var col = 1;                                // user-specified column
  var tab = getTab(spreadsheetId,tabNumber)
  var activeRange = setRange(tab/*,range*/);
  var cell = cellValue(activeRange,row,col);
}

// Add a custom menu to Google Sheet to run selected script.
// note: it appears that passing a value to a function causes the menu creation to fail.
// i.e. You must call alert1() and alert2() as alert1 and alert2 because alert(1) or alert(2) will trigger on pageload.
function buildMenu() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Alt Menu')
      .addItem('First item', 'alert1')
      .addItem('Second idem', 'alert2')
      .addItem('Third item', 'alert3')
      .addSeparator()
      .addSubMenu(ui.createMenu('Sub-menu')
          .addItem('Submenu item', 'menuItem2'))
      .addToUi();
}
function alert1() {
  var msg = "First menu";
  SpreadsheetApp.getUi().alert(msg);
}
function alert2() {
  var msg = "Second menu";
  SpreadsheetApp.getUi().alert(msg);
}
function alert3() {
  var msg = "Third menu";
  SpreadsheetApp.getUi().alert(msg);
}

// The spreadsheet is opened on the server only, not on the client side.
function openSheet(spreadsheetId) {
  var ssId = spreadsheetId;
  //var sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/' + indexId + '/edit');
  var sheet = SpreadsheetApp.openById(ssId);
  Logger.log(sheet.getName());
  return sheet;
}

// Opens the tab and returns the sheet name
function getTab(spreadsheetId,tabNumber) {
  var tab = tabNumber;
  var id = spreadsheetId;
  var ss = SpreadsheetApp.openById(id);
  var sheet = ss.getSheets()[tab];
  sheet.activate();
  Logger.log("readTab: " + sheet.getName());
  return sheet;
}

// Sets an active range of data on the selected tab
function setRange(tab) {
  var range = tab.getDataRange();
  range.activate();
  Logger.log("Range Set");
  return range;
}

// Returns a cell value within in the active range
function cellValue(activeRange,row,col) {
  var row = row;
  var col = col;
  var range = activeRange;
  var cell = range.getCell(row,col).getValue();
  Logger.log("cellValue: " + cell);
  return cell;
}
