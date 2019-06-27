$(function () {

    chrome.storage.sync.get(['TotalSpent', 'limit'], function (budget) {
        $('#TotalSpent').text(budget.TotalSpent);
        $('#limit').text(budget.limit);
    })

    $('#spendAmount').click(function () {
        chrome.storage.sync.get(['TotalSpent', 'limit'], function (budget) {
            var newTotal = 0;
            if (budget.TotalSpent) {
                newTotal += parseInt(budget.TotalSpent);
            }

            var amount = $('#amount').val();
            if (amount) {
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({
                'TotalSpent': newTotal
            }, function () {
                if (amount && newTotal >= budget.limit) {
                    var notifOptions = {
                        type: `basic`,
                        iconUrl: 'icon48.png',
                        title: `Limit reached!`,
                        message: "Uh oh! Looks like you've reached your limit"
                    };
                    chrome.notifications.create('limitNotif', notifOptions);
                }
            });

            $('#TotalSpent').text(newTotal);
            $('#amount').val('');
        });
    });
});