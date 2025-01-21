let firstnames = [];
let lastnames = [];
let emails = [];
let passwords = [];
var isfound = false;
function register (){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cp = document.getElementById("cpassword").value
    if (password === cp ){
        firstnames.push(firstname);
        lastnames.push(lastname);
        emails.push(email);
        passwords.push(password);
        alert("Registration Successful");
    }
    else{
        alert("Passwords do not match");
    }
    console.log(firstnames);
    console.log(lastnames);
    console.log(emails);
    console.log(passwords);

    
}
function login (){
    var le = document.getElementById("lemail").value;
    var lp = document.getElementById("lpassword").value;
    for (var i = 0; i < emails.length; i++){
        if (le === emails[i] && lp === passwords[i]){
            alert("Login Successful");
            document.getElementById('result').innerHTML= "Welcome " + firstnames[i] + " " + lastnames[i];
            isfound = true;
        }
        if ( isfound === false){
            alert("Login Failed");
        }
    }
}