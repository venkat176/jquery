var jdata = {
    "HR": [],
    "Finance": []
}

$(document).ready(function () {

    $('#getValues').click(function () {

        var contact = $('#dhr').val();
        var name = $('#conname').val();
        var email = $('#gmail').val();
        var mobile = $('#mobnum').val();
        var reason = $('#reas').val();

        if (name == "" || !(/^[A-Za-z\s]+$/.test(name))) {
            alert('Please enter valid text in Contactname')
        }
        else if (email == "" || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            alert('Please enter a valid email address')
        }
        else if (mobile == "" || !(/^\d{10}$/.test(mobile))) {
            alert('Please enter a valid mobile number')
        }
        else if (reason == "") {
            alert('Please enter your reason')
        }
        else {
            // alert("Successfully submitted");


            if ("HR" == contact) {

                onhr = { "Name": name, "Email": email, "Mobile": mobile, "Reason": reason }
                jdata.HR.push(onhr)
            }
            else {
                onfin = { "Name": name, "Email": email, "Mobile": mobile, "Reason": reason }
                jdata.Finance.push(onfin);
            }

            var myJSON = JSON.stringify(jdata);

            $('#jsondata').html(myJSON);
        }

    });

    $("#clearValues").click(function () {
        alert('All the fieds are errased');
        $(':input', '#formsubmit')
             .val('')
            // .not(':button, :submit, :reset, :hidden')
                        // .removeAttr('checked')
            // .removeAttr('selected');
    });

    $('#moveToNewPage').click(function () {

        window.location.href = "HOMEHTML.html";

    });

});