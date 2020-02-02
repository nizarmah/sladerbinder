chrome.browserAction.onClicked.addListener((tab) => {
    // console.log(tab.url.search("slader.com/cheatsheet/"));
    
    if (tab.url.search("slader.com/cheatsheet/") > -1 || 
            tab.url.search("slader.com/cs/") > -1) {
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
    }
});