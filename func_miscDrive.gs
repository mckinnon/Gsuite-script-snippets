
// fileToFolders() adds a specified file to each of the designated folders so
// the file is listed in multiple folders without duplicating disk use.

function fileToFolders() {
  var fileId = "0B5sqRl2yx1lFMjBGeFBQOQBwck0";
  var folders = ["FOLDER_1", "FOLDER_2", "FOLDER_3"];
  folders.forEach(function(entry) {
    Logger.log(entry);
    addFileToFolder(entry, fileId);
  });
}

// listAllFolders() logs all parent folders in the Drive. Does not use
// recursion to list child folders.
function listAllFolders() {
 var folders = DriveApp.getFolders();
 while (folders.hasNext()) {
   var folder = folders.next();
   Logger.log(folder.getName());  
 }
}