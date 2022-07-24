// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generatePassword function
function generatePassword() {
  
  // Define variables for character options
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var specialChar = [ "!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "." ];
 
  // Define variable as an empty string to house generated password
  var password = "";
  
  // Prompt user to define length of password between 8 and 128 characters only
  var passwordLength = prompt("Enter desired length of password. Must be between 8 to 128 characters.");
  // console.log(passwordLength);

  // Write condition for password length input by user within the set parameters
  // Set user input string value to integer value
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
    console.log("hello");
  // Write function of above condition to make password length equal to integer value of user input
  
  } 
    // Alert user of invalid entry then prompt user to try again. 
    else {
      alert("Invalid entry. MUST be between 8 to 128 characters. Please try again.");
      console.log("enter correct number");
    }

  


  
  // Ask user if they want to include lowercase letters
  // var lowercaseChar = confirm("Click OK to include lowercase letters.");
  // console.log(lowercaseChar);
  // Ask user if they want to include uppercase letters
  // var uppercaseChar = confirm("Click OK to include uppercase letters.");
  // console.log(uppercaseChar);

  // Ask user if they want to include numbers
  // var numberChar = confirm("Click OK to include numbers.");
  // console.log(numberChar);

  // Ask user if they want to include special characters
  // var specialChar = confirm("Click OK to include special characters.");
  // console.log(specialChar);

  // return password;
  // console.log("wee!");
}

console.log(generatePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Will need to use createElement
// text.Content
// appendChild
// possibly use event.preventDefault(); method?