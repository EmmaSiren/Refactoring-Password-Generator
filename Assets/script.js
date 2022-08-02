// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generatePassword function
function generatePassword() {
  
  // Define variables for character options
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var special = "!#$&%',*+-/:;<=>?@^_~`|."
  // var specialChar = [ "!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "." ];
 
  // Define variable as an empty string to house generated password
  var password = "";
  // var endResult = [];

  // Prompt user to define length of password between 8 and 128 characters only
  var passwordLength = prompt("Enter desired length of password. Must be between 8 to 128 characters.");
  // console.log(passwordLength);

  // Write condition for password length input by user within the set parameters
  // Set user input string value to integer value
  if (parseInt(passwordLength) >= 8 || parseInt(passwordLength) <= 128) {
    console.log("hello");
  // Write function of above condition to make password length equal to integer value of user input
    passwordLength.length = parseInt(passwordLength);
    console.log("you did it!");
  } 
    // Alert user of invalid entry then prompt user to try again. 
    else {
      alert("Invalid entry. MUST be between 8 to 128 characters. Please try again.");
      console.log("enter correct number");
    }

    
  // Ask user if they want to include lowercase letters
  var lowercaseChar = confirm("Click OK to include lowercase letters.");
  console.log(lowercaseChar);

  if (lowercaseChar) {
    test1 = password.concat(lowercase);
    console.log("yes lowercase");
  } else {
    test1 = password;
    console.log("no lowercase");
  }
  // Ask user if they want to include uppercase letters
  var uppercaseChar = confirm("Click OK to include uppercase letters.");
  console.log(uppercaseChar);

  if (uppercaseChar) {
    test2 = password.concat(uppercase);
    console.log("yes uppercase");
  } else {
    test2 = password;
    console.log("no uppercase");
  }
  // Ask user if they want to include numbers
  var numberChar = confirm("Click OK to include numbers.");
  console.log(numberChar);

  if (numberChar) {
    test3 = password.concat(numbers);
    console.log("yes numbers");
  } else {
    test3 = password;
    console.log("no numbers");
  }
  // Ask user if they want to include special characters
  var specialChar = confirm("Click OK to include special characters.");
  console.log(specialChar);

  if (specialChar) {
    test4 = password.concat(special);
    console.log("yes special");
  } else {
    test4 = password;
    console.log("no special");
  }
  
  password = test1 + test2 + test3 + test4;
  console.log(password);

// Randomizer function
// function getRandom(arr) {
//   var randIndex = Math.floor(Math.random() * arr.length);
//   var randElement = arr[randIndex];
//   return randElement;
// }
  //Run however many times for password length to randomize and add to endResult
  // for (let i = 0; i < parseInt(passwordLength); i++) {
  //   endResult.push()
  //   endResult = passwordLength[i];
    
  // }

  // return endResult;
  return password;
}

// console.log(generatePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// possibly use event.preventDefault(); method?