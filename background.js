chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
    code: "document.querySelectorAll('.load-diff-by-file').forEach(i => i.click())"
  })
})
