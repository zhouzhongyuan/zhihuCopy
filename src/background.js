chrome.tabs.onUpdated.addListener(function(tab,changeInfo) {
    if(changeInfo.favIconUrl){
        chrome.tabs.executeScript(null, {file: "content-no.js"});
    }
});
chrome.tabs.onUpdated.removeListener(function(tab,changeInfo) {
    if(changeInfo.favIconUrl){
        chrome.tabs.executeScript(null, {file: "content-no.js"});
    }
});
//暂时这样解决吧。