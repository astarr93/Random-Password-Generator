// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Ask user for desired password length
  var pwChoiceLength = parseInt(
    prompt("How many characters should your password be?")
  );
  var pwLength = parseInt(pwChoiceLength);
  // Checking validation of user input for password length
  if (Number.isInteger(pwLength) == false) {
    alert(
      "Please enter a numerical value between 8 and 128 for your new password."
    );
    pwChoiceLength = prompt("How many characters should your password be?");
  } else if (pwLength < 8 || pwLength > 128) {
    alert(
      "Please enter a numerical value between 8 and 128 for your new password."
    );
    pwChoiceLength = prompt("How many characters should your password be?");
  }
   
  console.log("You selected a password length of: " + pwLength);
}
// Ask if the customer

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
