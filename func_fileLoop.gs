/*
  The fileLoop function will add a specified file to each of the designated folders.
  This allows files to be listed in multiple directories without duplicating disk use.
  It is a scripted version of holding CTRL while Moving a file using the GUI.
*/

function fileLoop() {
  var fileId = "0B5sqRl2yx1lFMjBGeFBQOQBwck0";
  var folders = ["FOLDER_1", "FOLDER_2", "FOLDER_3"];
  folders.forEach(function(entry) {
    Logger.log(entry);
    addFileToFolder(entry, fileId);
  });
}