 

function validateSSN(){
    var x = document.forms["yourSSN"]["SSN"].value;
    if (x.length() != 8) {
        window.alert("You didn't enter 8 digits. Please enter 8 digits so we can verify your identity");
        return false;
    }
    // This should be an or statement, bc if it is 8 characters
    // long, but with not digits, it will return true.
    // Somehow make it an or
    else if (x.typeof()==='string') {
        window.alert("You accidentally typed something other than digits. Please re-enter your SSN properly.");
        return false;
    }
    
}
