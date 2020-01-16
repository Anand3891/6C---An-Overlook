
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
var count = 2;
function validate() {
  var un = document.myform.username.value;
  var pw = document.myform.pword.value;
  var valid = false;
  var unArray = ["Archit", "Sreehitha", "Nakul", "Vrinda", "Diya", "Keshav", "Yuvraj", "Lucas", "Eric", "Maanika", "Dhruva", "Anuj", "Nyan", "Roonhi", "Saachi", "Pranesh", "Anand", "Nathan", "Layton", "Kathy", "admin"];
  var pwArray = ["6COverlook", "6COverlook", "debatechiuoaamp246", "6COverlook", "6COverlook", "6COverlook", "6COverlook", "lucaca", "badatbrawlstars", "6COverlook", "6COverlook", "football123", "poopyface", "6COverlook", "6COverlook", "pranpran#1", "1141144", "Jeffy", "SAO", "6COverlook", "admin"];
  for (var i = 0; i < unArray.length; i++) {
    if ((un == unArray[i]) && (pw == pwArray[i])) {
      valid = true;
    }
  }
  
  
  if (valid) {
    alert("Login successful.  Hello, " + un + ". Welcome to our website.");
    window.location.replace("home.html");
  }
  
  else {
    alert("Invalid username and/or password. Try again. If you are not in 6C, you cannot access this website.");
  }
  var t = " tries";
  if (count == 1) { t = " try" }
  if (count >= 1) {
    document.myform.username.value = "";
    document.myform.pword.value = "";
    setTimeout("document.myform.username.focus()", 25);
    setTimeout("document.myform.username.select()", 25);
    count--;
  }
  else {

    return true;
  }
}




