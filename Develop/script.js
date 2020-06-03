// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Setting Variables
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = lowercase.toUpperCase();
  const numerical = "0123456789";
  const special = "!@#$%&*=+";
  let charBank = "";
  let result = "";

  // Ask user for desired password length
  let pwLength = parseInt(
    prompt("How many characters should your password be?")
  );

  // Validation of user input for password length
  if (!pwLength || pwLength < 8 || pwLength > 128) {
    alert("Invalid Entry. Please enter a numerical value between 8 and 128");
    generatePassword();
  } else {
    console.log("You selected a password length of: " + pwLength);

    // Ask user if password should include uppercase characters
    let pwUpper = confirm(
      "Include uppercase characters in your random password?"
    );
    console.log("Include uppercase characters?: " + pwUpper);

    // Ask user if password should include lowercase characters
    let pwLower = confirm(
      "Include lowercase characters in your random password?"
    );
    console.log("Include lowercase characters?: " + pwLower);

    // Ask user if password should include special characters
    let pwSpecial = confirm(
      "Include special characters in your random password?"
    );
    console.log("Include special characters?: " + pwSpecial);

    // Ask user if password should include whole numbers
    let pwNumber = confirm("Include whole numbers in your random password?");
    console.log("Include whole numbers?: " + pwNumber);

    // Validate at least one character type was selected
    if (!pwUpper && !pwLower && !pwSpecial && !pwNumber) {
      console.log("No character type was selected. At least one type must be selected to make a password")
      alert("At lease one character type (uppercase, lowercase, special, numbers) must be selected to make a password")
      generatePassword();
    }

    // Concat User Selections to charBank by checking for truthy
    if (pwUpper) {
      charBank += uppercase;
    }
    if (pwLower) {
      charBank += lowercase;
    }
    if (pwSpecial) {
      charBank += special;
    }
    if (pwNumber) {
      charBank += numerical;
    }

    // Loop desired password length, picking a random character from charbank, and returning the result to function WritePassword()
    for (let i = 0; i < pwLength; i++) {
      const charBankArray = charBank.split("");
      index = Math.floor(Math.random() * charBank.length);
      result += charBankArray[index];
    }
    return result;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
