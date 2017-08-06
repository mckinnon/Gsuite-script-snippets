/* this JS can uploads files to "Folder Name" in the Drive, with the option
   to restrict access or not. Requires app premissions. Use with the accompanying
   form.html.*/

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function uploadFiles(form) {
  
  try { 
    var dropbox = "Folder Name"; //form.myFolder;
    var folder, folders = DriveApp.getFoldersByName(dropbox);

    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
      folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      /* alternative permissions:
      folder.addEditor('user@domain.com');
      folder.addViewer('user@domain.com');
      folder.addViewer('user@domain.com');
      */
    }
    
    var blob = form.myFile;    
    var file = folder.createFile(blob);
    /* add a description
    file.setDescription("Description: " + form.myDescription);
    */
        
    return "File uploaded successfully " + file.getUrl();
    
  } catch (error) {
    
    return error.toString();
  }
  
}