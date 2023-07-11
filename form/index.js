function validateForm() {
    // Check if the name field is empty.
    if (document.getElementById("name").value == "") {
      alert("Please enter your name.");
      return false;
    }
  
    // Check if the email field is empty.
    if (document.getElementById("email").value == "") {
      alert("Please enter your email address.");
      return false;
    }
  
    // Check if the email field is valid.
    if (!validateEmail(document.getElementById("email").value)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Check if the phone number field is empty.
    if (document.getElementById("phone").value == "") {
      alert("Please enter your phone number.");
      return false;
    }
  
    // Check if the password field is empty.
    if (document.getElementById("password").value == "") {
      alert("Please enter your password.");
      return false;
   }
  
    // Check if the password field is at least 8 characters long.
    if (document.getElementById("password").value.length < 8) {
      alert("Your password must be at least 8 characters long.");
      return false;
    }
  
    // Check if the date field is empty.
    if (document.getElementById("date").value == "") {
      alert("Please enter your date of birth.");
      return false;
    }
  
    // Check if the gender field is empty.
    if (document.getElementById("gender").value == "") {
      alert("Please select your gender.");
      return false;
    }
  
    // Check if the color field is empty.
    if (document.getElementById("color").value == "") {
      alert("Please select your favorite color.");
      return false;
    }
  
    // The form is valid.
    return true;
  }
  
  function validateEmail(email) {
    // A valid email address must contain a "@" symbol and a period.
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      return false;
    }
  
    // A valid email address must not contain spaces.
    if (email.indexOf(" ") != -1) {
      return false;
    }
  
    // The email address is valid.
    return true;
  }