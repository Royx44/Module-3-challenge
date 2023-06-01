// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = 10;//lenght of the generated password
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"; // Characters to include in the password
  var password = "";

  for (var i = 0; i < length; i++){
var randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
  }
 return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
