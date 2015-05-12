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

            },
            error: function(error) {
                
            }
        });
    } else {
        //TODO passwords don't match
    }
}