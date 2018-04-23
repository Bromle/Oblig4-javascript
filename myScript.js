$(document).ready(function() {
    // navn
    $("#name").change(function() {
        var name = $("#name");
        if (!name.val().includes(" ")) {
            this.setCustomValidity("Please add full name");
        }
        else {
            this.setCustomValidity("");
        }
    });
    //Brukernavn
    $("#username").change(function () {
        var username = $("#username");
        if (username.val().includes(" ")) {
            this.setCustomValidity("please enter a username without space");
        }
        else {
            this.setCustomValidity("");
        }
    });
    //epost
    $("#email").change(function () {
        var email = $("#email");
        var re = /([A-Za-z0-9._+-]+@[A-Za-z0-9._+-]+\.[A-Za-z]+)/;
        if (!re.test(email.val())) {
            this.setCustomValidity("Please add an valid email account")
        }
        else {
            this.setCustomValidity("");
        }
    });
    //registrering
    $("#my-form").submit(function () {
        alert("request recieved");
        return false;
    });

});