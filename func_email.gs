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

// messageDetails() lists metadata for the first message in each thread in a tag.
function messageDetails(thread, eachTag) {
  for (var i = 0; i < thread.getMessageCount(); i++) {
    var message = thread.getMessages()[i]; 
    var tag = eachTag;
    if (eachTag.slice(0, 5) == "Dams/") {
      var tag = eachTag.slice(5);
    }
    var msgId = message.getId();
    var date = message.getDate();
    var from = message.getFrom();
    var subject = message.getSubject();
    Logger.log("Tag: " + eachTag + "\n" + "From: " + message.getFrom() + "\n" + "Date: " + message.getDate() + "\n" + "Subject: " + message.getSubject() + "\n");}
  }
}