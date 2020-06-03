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
  var pwLength = parseInt(
    prompt("How many characters should your password be?")
  );

  // Checking validation of user input for password length

  if (Number.isInteger(pwLength) == false || pwLength < 8 || pwLength > 128) {
    console.log("Invalid Entry. Please enter a numerical value between 8 and 128");
    alert("Invalid Entry. Please enter a numerical value between 8 and 128");
    generatePassword();
  } else {
    var Password = [];
    Password.length = pwLength;
    console.log("You selected a password length of: " + pwLength);
  }

  // Ask user if password should include uppercase characters?
  var pwUpper = confirm(
    "Include uppercase characters in your random password?"
  );
  console.log("Include uppercase characters?: " + pwUpper);

  // Ask user if password should include lowercase characters?
  var pwLower = confirm(
    "Include lowercase characters in your random password?"
  );
  console.log("Include lowercase characters?: " + pwLower);

  // Ask user if password should include special characters?
  var pwSpecial = confirm(
    "Include special characters in your random password?"
  );
  console.log("Include special characters?: " + pwSpecial);

  // Ask user if password should include whole numbers?
  var pwNumber = confirm(
    "Include whole numbers in your random password?"
  );
  console.log("Include whole numbers?: " + pwNumber);

// If confirms are true, add to an array



}

// console.log(
//   "When asked if the password generator should include uppercase letters in your password, you selected "
//     // pwUpper
// );

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
