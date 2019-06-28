$(function () {
    var color = $('#fontColor').val();
    // Listen to 3 different things, when the value changes, copy pastes, and keyup
    // Assign the particular value
    $('#fontColor').on("change paste keyup", function () {
        color = $(this).val();
    });
    // Listen to button change (submit button)
    $('#btnChange').click(function () {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                todo: "changeColor",
                clickedColor: color
            })
        })
    })
})