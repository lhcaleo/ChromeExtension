chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo == "showPageAction"){
        // if there's a request to show the page action
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.pageAction.show(tabs[0].id);
        });
    }
});
