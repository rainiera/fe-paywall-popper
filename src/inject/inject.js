chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      console.log("Removing Business Insider paywall...");

      document.getElementsByClassName("tp-modal")[0].remove()
      document.getElementsByClassName("tp-backdrop")[0].classList.remove("tp-active")
      document.styleSheets[document.styleSheets.length - 1].insertRule(".tp-modal-open { overflow: visible!important; }", 0)
    }
  }, 10);
});
