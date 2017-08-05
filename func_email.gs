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

// allThreads() lists the thread ID of everything in the Inbox
function allThreads() {
  var threads = GmailApp.getInboxThreads();
  for (var i = 0; i < threads.length; i++) {
    var threadId = threads[i].getId();
    Logger.log(threadId);
	}
}

// allEmails() List data from every message in the Inbox
function allEmails() {
  var threads = GmailApp.getInboxThreads();
  for (var i = 0; i < threads.length; i++) {
    var threadId = threads[i].getId();
    var threadCount = threads[i].getMessageCount();
    var threadUrl = threads[i].getPermalink();
    var threadLabels = "TBD";
    for (var x = 0; x < threadCount; x++) {
      var message = threads[i].getMessages()[x];
      var msgDate = message.getDate();
      var msgSubject = message.getSubject();
      var msgFrom = message.getFrom();
      var msgTo = message.getTo();
      var msgCC = message.getCc();
      var msgBCC = message.getBcc();
      var msgId = message.getId();
      var msgBody = message.getPlainBody();
      reportEmails(msgId, threadId, threadUrl, msgTags, msgDate, msgSubject, msgFrom, msgTo, msgCC, msgBCC, msgBody);
      Logger.log("Email: " + msgId +", " + threadUrl +", " + msgDate +", " + msgSubject +", " + msgFrom)};
    }
  }
}