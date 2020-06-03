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
  if (Number.isInteger(pwLength) == false || pwLength < 8 || pwLength > 128) {
    alert("Invalid Entry. Please enter a numerical value between 8 and 128");
    pwLength = 0;
    generatePassword();
  } else {
    var Password = [];
    Password.length = pwLength;
    console.log("You selected a password length of: " + pwLength);
  }
}

// Ask user if password should include uppercase characters?

//   var pwChoiceUpper = confirm(
//     "Include uppercase characters in your random password? Type 'Yes' or 'No'"
//   );
//   if (pwChoiceUpper === false) {
//     var pwUpper = false;

//   } else {
//     var pwUpper = true;
//   }
// }

// console.log(
//   "When asked if the password generator should include uppercase letters in your password, you selected "
//     // pwUpper
// );

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
