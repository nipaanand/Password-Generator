// Assignment Code
//Global Variables
var confirmLength;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Variables to input values for password

var generateBtn = document.querySelector('#generate');

const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specillcharacterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


//Functions to get options from user Input
function generatePassword() {
    var confirmLength = (prompt("How many characters would you like your password to contain?"));

    // Loop if answer is outside the parameters 
    //var confirmLength = (prompt("How many characters would you like your password to contain?"));
    while (confirmLength <= 7 || confirmLength >= 129) {
        alert("Password length must be 8 to 128 characters Try again");
        //var confirmLength = (prompt("How many characters would you like your password to contain?"));
    }

    // Repeat back how many charactes the user will have  
    alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    // Loop if answer is outside the parameters 
    while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    }

    // Assign an action to the password parameters NEED TO FIX THIS
    var passwordCharacters = []

    if (confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specillcharacterArray);
    }

    if (confirmNumericCharacter) {
        passwordCharacters = passwordCharacters.concat(numbArray)
    }

    if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(lowercaseArray)
    }

    if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(uppercaseArray)
    }

    console.log(passwordCharacters)

    // Empty string to be filled based on for loop selecting random characters from the array
    var randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
    }
    return randomPassword;
}




// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);