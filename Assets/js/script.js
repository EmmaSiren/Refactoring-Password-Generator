// Define generateBtn as the area defined by the HTML class generate
var generateBtn = document.querySelector("#generate");

// Define generatePassword function
function generatePassword() {
  
  // Define variables for character options
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var special = "!#$&%',*+-/:;<=>?@^_~`|."
 
  // Define password variable as an empty string to house selected character options
  var password = '';
  // Define endResult variable as an empty array to house generated password
  var endResult = [];

  // Prompt user to define length of password between 8 and 128 characters only
  var passwordLength = prompt("Enter desired length of password. Must be between 8 to 128 characters.");

  // Set user input string value to integer value
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
  } 
    // Alert user of invalid entry then prompt user to try again. 
    else {
      alert("Invalid entry. MUST be between 8 to 128 characters. Please try again.");
      var tryAgain = "Invalid Entry. Try Again"
      //Exit logic by returning tryAgain variable
      return tryAgain;
  }
    
    
  // Ask user if they want to include lowercase letters
  var lowercaseChar = confirm("Click OK to include lowercase letters.");
  // Console log to check if true or false
  console.log(lowercaseChar);

  // Write condition for password to include lowercase letters if user selects 'OK'
  if (lowercaseChar) {
    // Redefine 'password' to include 'lowercase' at the end of the string
    password = password + lowercase;
    // Console log to see what 'password' contains so far
    console.log(password);
    // Write condition for 'password' to exclude lowercase letters if user selects 'CANCEL'
  } else {
    // 'password' should remain empty as when first defined
    // Console log to check what password string contains so far 
    console.log(password);
  }

  // Ask user if they want to include uppercase letters
  var uppercaseChar = confirm("Click OK to include uppercase letters.");
  console.log(uppercaseChar);

  // Write condition for password to include uppercase letters if user selects 'OK'
  if (uppercaseChar) {
    // Redefine 'password' to include 'uppercase' at the end of the current string
    password = password + uppercase;
    console.log(password);
    // Write condition for 'password' to exclude uppercase letters if user selects 'CANCEL'
  } else {
    // 'password' should not include 'uppercase' at the end of the string
    // 'password' should still contain 'lowercase' if user selected 'OK' on previous confirm
    console.log(password);
  }

  // Ask user if they want to include numbers
  var numberChar = confirm("Click OK to include numbers.");
  console.log(numberChar);

  // Write condition for password to include numbers if user selects 'OK'
  if (numberChar) {
    // Redefine 'password' to include 'numbers' at the end of the current string
    password = password + numbers;
    console.log(password);
    // Write condition for 'password' to exclude numbers if user selects 'CANCEL'
  } else {
    // 'password' should not include 'numbers' at the end of the current string
    // 'password' should still contain all previous additions
    console.log(password);
  }

  // Ask user if they want to include special characters
  var specialChar = confirm("Click OK to include special characters.");
  console.log(specialChar);

  // Write condition for password to include special characters
  if (specialChar) {
      // Redefine 'password' to include 'special' at the end of the current string
    password = password + special;
    console.log(password);
    // Write condition for 'password' to exclude special characters if user selects 'CANCEL'
  } else {
    // 'password' should not include 'special' at the end of the current string
    // 'password' should still contain all previous additions
    console.log(password);
  }
  
  // Write function to randomly select values from each selected additional string in current 'password'
  function randomPassword(str) {
    var randIndex = Math.floor(Math.random() * str.length);
    // Add random selection to the end of the new string defined as 'randElement'
    var randElement = str[randIndex];

    // Return completed randomized string aka randElement
    return randElement;
  }

  // Loop randomPassword function as many times as defined by the user input parseInt(passwordLength)
  for (let i = 0; i < parseInt(passwordLength); i++) {
    // Add result of randomPassword to end of 'password' then push value to endResult array
    endResult.push(randomPassword(password));
  }

  // Return entire array of endResult as a string
  return endResult.join('');
}

// Write password to the #password input
function writePassword() {
  // Define password as value of generatePassword function (endResult) and call on generatePassword function
  var password = generatePassword();
  // Define passwordText as the section where password will be displayed, refrencing the HTML class
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener on a click to generateBtn to call on writePassword function
generateBtn.addEventListener("click", writePassword);

