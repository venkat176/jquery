var rows = "";

$(document).ready(function () {

    $("#getValues").click(function () {

        var fname = $('#txtfirstname').val();
        var lname = $('#txtlastname').val();
        var Gender = $("input[name='gender']:checked").val();
        var mobile = $('#txtnum').val();
        var age = $('#numage').val();
        var state = $('#dstate option:selected').val();
        var address = $('#rgform').val();

        // (false || false)
        if (fname == "" || !(/^[A-Za-z]+$/.test(fname))) {
            alert("Please enter valid text in first name")
        }
        else if (lname == "" || !(/^[A-Za-z]+$/.test(lname))) {
            alert("Please enter valid text in last name")
        }
        else if (Gender === undefined) {
            alert("Please select your Gender")
        }
        else if (mobile == "" || mobile.length != 10 || !(/^\d{10}$/.test(mobile))) {
            alert("Please enter valid 10 digit mobile")
        }
        else if (age == "" || age < 14 || age > 61) {
            alert("Pleasae enter age between 15 to 60")
        }
        else if (state === "select" || (state === undefined)) {
            alert('Please select your state')
        }
        else if (address == "") {
            alert('Please enter your address')
        }
        else {
            // alert('success');


            rows += "<tr><td>" + fname + "</td><td>" + lname + "</td><td>" + Gender + "</td><td>" + mobile + "</td><td>" + age + "</td><td>" + state + "</td><td>" + address + "</td></tr>";
            $('#rowsdata').html(rows);
        }
    });

    $("#clearValues").click(function () {
        $(':input', '#formsubmit')
            .val('');
        // alert('All the fieds are errased');
        // .not(':button, :submit, :reset, :hidden');
        // .removeAttr('checked')
        // .removeAttr('selected');
    });

    $('#moveToNewPage').click(function () {

        window.location.href = "HOMEHTML.html";

    });
});

