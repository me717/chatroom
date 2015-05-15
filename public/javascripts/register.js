function register() {
    var username = $("#usernameInput").val();
    var password = $("#passwordInput").val();
    var confirmPassword = $("#confirmInput").val();
    if (password == confirmPassword) {
        data = {
            username: username,
            password: password
        };
        $.ajax('/users/register', {
            method: "POST",
            data: data,
            success: function(response) {
                if(!response) {
                    $("#message").html("Username is already in use");
                    $("#passwordInput").val("");
                    $("#confirmInput").val("")
                } else {
                    window.location.href = "chatroom";
                }
            },
            error: function(error) {
                $("#message").html("Server error.  Please try again later");
                $("#passwordInput").val("");
            }
        });
    } else {
        //TODO passwords don't match
    }
}