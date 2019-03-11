function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}

global.doGet = doGet;
