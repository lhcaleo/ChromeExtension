var menuItem = {
    "id": "speak",
    "title": "Speak",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId === "speak" && clickData.selectionText){
        // tts-> text-to-speak
        chrome.tts.speak(clickData.selectionText, {'rate':0.8})
    }
});