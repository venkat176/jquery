$(document).ready(function () {
    $("#btnlog").click(function () {

        var email = $('#user').val();
        var passw = $('#pass').val();

        $(".error").remove();

        $("#msg").hide();

        // if (email == "" || passw == "") {

        //     $('inut[type="text"],input[type="password"]').css("border", "2px solid red");
        //     $('inut[type="text"],input[type="password"]').css("box-shadow", "0 0 2px red");
        // }



        if (email.length < 1) {
            $('#user').after('<span class="error">This field is required</span>');
            $(".error").css("color", "red");
        } else if (email === "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            $('#user').after('<span class="error">Enter a valid email</span>');
            $(".error").css("color", "red");
        }else if (passw.length < 8) {
            $('#pass').after('<span class="error">Password must be at least 8 characters long</span>');
            $(".error").css("color", "red");
        }else{
            alert('login Successfull');
            window.location.href = "log1.html";
        }

        // if (email === !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) || passw.length > 8) {
        //     // alert('Your successfully logged in')
        //     $('#msg').show();
        //     $('#msg').html("Your Successfully logged in");
        //     $('#msg').focus();
        //     $("#msg").css("color", "red");
        // }

        // $(".login").click(function () {
        // if (email == 'email' && passw == 'password') {
        //     $("#first").hide();
        //     $("#second").show();
        //     $("#second").append("<p>Hello, admin</p> <br/><input type='button' class='logout' value='Log Out' />");
        // }
        // else {
        //     alert("Please try again");
        // }

        // $(".logout").click(function () {
        //     $("form")[0].reset();
        //     $("#second").children('p, input').remove();
        //     $("#first").show();
        //     $("#second").hide();
        // });

    });
});