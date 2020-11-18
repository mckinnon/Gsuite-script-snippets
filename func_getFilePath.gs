// Example use of getFilePath()
function run() {
  var fileId = "";
  var fileName = "";
  
  if (fileId != "") {
      Logger.log("Using fileId " + fileId);
      var path = getFilePath(fileId);
  } else if (fileName != "") {
    var files = DriveApp.getFilesByName(fileName);
    while(files.hasNext()) {
      var file = files.next();
      var fileId = file.getId();
      Logger.log("Using fileName " + fileName + " [fileId " + fileId + "]");
      var path = getFilePath(fileId);
    }
  } else {
    Logger.log("Error: requires fileId or fileName");
  }
  
  Logger.log("\n" + "path in run() = " + path);
}

// Return the Google Drive path for the provided the file id 
function getFilePath(fileId) {
  var file = DriveApp.getFileById(fileId);
  var folders = [];
  var parent = file.getParents();

  while (parent.hasNext()) {
    parent = parent.next();
    folders.push(parent.getName());
    parent = parent.getParents();
  }

  var path = folders.reverse().join("/");
  Logger.log("path in getFilePath(): " + path);
  return path;
}
