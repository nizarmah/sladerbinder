chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.search("slader.com/cheatsheet/") > -1 || 
            tab.url.search("slader.com/cs/") > -1) {
        chrome.pageAction.show(tabId);
    } else {
        chrome.pageAction.hide(tabId);
    }
});

chrome.pageAction.onClicked.addListener((tab) => {
    chrome.tabs.insertCSS(
        {
            file: 'main.css'
        }, 
        () => {
            chrome.tabs.executeScript({
                "code": "window.print();"
            });
        }
    );
});