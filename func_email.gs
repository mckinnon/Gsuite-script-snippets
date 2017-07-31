// listTags() logs the names all of your email tags
function listTags() {
  var tags = [];
  var tag = GmailApp.getUserLabels();
  for (var i = 0; i < tag.length; i++) {
    tags.push(tag[i].getName());
    Logger.log("Tag: " + tag[i].getName());}
  }
  return tags;
}