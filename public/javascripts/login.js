function login() {
    console
    var username = $("#usernameInput").val();
    var password = $("#passwordInput").val();
    var data = {
        username: username,
        password: password
    };
    $.ajax('/users/login', {
        method: "POST",
        data: data,
        success: function(response) {
            console.log(response);
            if(response) {

            } else {
                $("#message").html("Error with login information");
                $("#passwordInput").val("");
            }
        },
        error: function(error) {
            $("#message").html("Server error.  Please try again later");
            $("#passwordInput").val("");
        } 
    });
}