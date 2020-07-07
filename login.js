function validate(){
    var emails = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    //console.log(emails);
    //console.log(pass.length);   
     if (emails == "") {
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

    if (pass == "") {
        document.getElementById('passw').innerHTML = "Please fill the password field";
        return false;
    }
    if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('passw').innerHTML = "Passwords lenght must be between  5 and 20";
        return false;
    }

    //return true;
}