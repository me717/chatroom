$(document).ready(function() {
    showMessages();
});

function showMessages() {
    $.ajax('/messages/viewAll', {
        success: function(response) {
            $('#messagesDiv').html(response);
        },

        error: function(error) {
            $('#messagesDiv').html("Error:" + response);
        }
    });
}