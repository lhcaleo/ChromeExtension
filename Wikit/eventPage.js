var menuItem = {
    "id": "wikit",
    "title": "Wikit",
    "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

// Any text you select, it's going to prepare it in a format
// that can be appended to a URL
// [ and ] is replaced by %5B and %5D at URL encoding time.
function fixedEncodeURL (str){
    return encodeURI(str).replace(/%5B/g,'[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId === "wikit" && clickData.selectionText){
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURL(clickData.selectionText);
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": parseInt(screen.availWidth/2),
            "height": parseInt(screen.availHeight/2)
        };
        chrome.windows.create(createData,function(){});
    }
})