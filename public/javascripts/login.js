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
        },
        error: function(error) {
            console.log(error);
        } 
    });
}