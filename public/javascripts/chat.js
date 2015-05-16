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

function sendMessage() {
    var text = $("#messageInput").val();
    $.ajax('/messages/sendMessage', {
        method: "POST",
        
        data: {
            message: text
        },

        success: function(response) {
            showMessages();
        },

        error: function(error) {
            $('#messagesDiv').html("Error:" + response);
        }
    })
}