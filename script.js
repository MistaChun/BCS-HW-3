function generatePassword(){
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var specialChar = "!@#$%^&*()";
    var character = "1234567890!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var newPass = "";
    var question = prompt("Desired password length?");
    var askLowerCase = confirm("Press OK if you would like lower case");

function together(){
    for(var i = 0, n = question; i < question; i++){
        newPass += character.charAt(Math.floor(Math.random() * n));  
        document.getElementById("password").innerHTML = newPass;   
    }     
}
function upperCase1(){
    var askUpperCase = confirm("Press OK if You would like just uppercase");
    if (askUpperCase){
        for(var i = 0, n = question; i < question; i++){
            newPass += upperCase.charAt(Math.floor(Math.random() * n)); 
            document.getElementById("password").innerHTML = newPass; 
        }
    }
    else  {
        number();
    }
}
function chracter(){
    var askCharacters = confirm("Press OK if You would like just chracters");
    if(askCharacters){
        for(var i = 0, n = question; i < question; i++){
            newPass += specialChar.charAt(Math.floor(Math.random() * n));  
            document.getElementById("password").innerHTML = newPass;                
        }
    }
    else{
        together();
    }
}
function number(){
    var askNumbers = confirm("Press OK if You would like just numbers");
    if(askNumbers){
        for(var i = 0, n = question; i < question; i++){
            newPass += numbers.charAt(Math.floor(Math.random() * n));  
            document.getElementById("password").innerHTML = newPass;                
        }
    }
    else{
        character();
    }
}
if (askLowerCase){
    for(var i = 0, n = question; i < question; i++){
        newPass += lowerCase.charAt(Math.floor(Math.random() * n));  
        document.getElementById("password").innerHTML = newPass;     
    }
}
    else  {
    upperCase1();
    }
}
function copy(){
    var copy = document.getElementById("password");
    copy.select();
    document.execCommand("copy");
}