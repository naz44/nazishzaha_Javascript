function registerValidation() {  
    var user = document.getElementById('InputUser').value;
    var name = document.getElementById('InputName').value;
    var mobile = document.getElementById('InputPhone').value;
    var emails = document.getElementById('InputEmail').value;
    var pass = document.getElementById('InputPassword').value;
    var cmpass = document.getElementById('InputConfirmPassword').value
    if (user.trim() == "") {
        document.getElementById('checkUser').innerHTML = "Please enter the user name";
        return false;
    }
    if (name.trim() == "") {
        document.getElementById('checkName').innerHTML = "Please enter the full name";
        return false;
    }
    if (!isNaN(name)) {
        document.getElementById('checkName').innerHTML = "Characters must be A-Z, a-z";
        return false;
    }
	if (emails.trim() == "") {
        document.getElementById('emailids').innerHTML = "Please enter email id";
        return false;
    }
    if (emails.indexOf('@') <= 0) {
        document.getElementById('emailids').innerHTML = "@ Invalid Position";
        return false;
    }

    if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
        document.getElementById('emailids').innerHTML = ". Invalid Position";
        return false;
    }
    if (mobile.trim() == "") {
        document.getElementById('checkPhone').innerHTML = "Please enter the mobile number";
        return false;
    }
    if (isNaN(mobile)) {
        document.getElementById('checkPhone').innerHTML = "Should contain 0-9";
        return false;
    }
    if (mobile.length != 10) {
        document.getElementById('checkPhone').innerHTML = "10 digits only";
        return false;
    }
    if (pass.trim() == "") {
        document.getElementById('passw').innerHTML = "Please enter the password";
        return false;
    }
    if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('passw').innerHTML = "Password's length must be between 5 to 20";
        return false;
    }

    if (cmpass.trim() == "") {
        document.getElementById('checkConfirm').innerHTML = "Please enter the password again";
        return false;
    }
    if (pass != cmpass) {
        document.getElementById('checkConfirm').innerHTML = "Password doesn't match";
        return false;
    }
}