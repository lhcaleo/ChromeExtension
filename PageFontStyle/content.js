chrome.runtime.sendMessage({
    todo: "showPageAction"
});
// asking the content scrit to send a message to 
// the eventPage to show the page actionß

// Listen to the particular message, check if it's the request to change color
// Then, change the color of class="api"
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo === "changeColor"){
        var addColor = '#' + request.clickedColor;
        $('.api').css('color',addColor);
    }
});