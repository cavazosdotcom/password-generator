// Assignment Code
var generateBtn = document.querySelector("#generate");

// creates variable with an array with characters the user later dictates will be in password
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","@","#","$","%","^","&","*","(",")","-","_","~","`","=","+",";",":","/","?",".",",",">","<","[","]","{","}"];


// main function to generate password
function generatePassword (){

  // creates password variable and empty array for all the chosen characters
  var password = "";
  var characters = [];

  // user is prompted for the length of the password generated, giving us the variable for the password length
  var passwordLength = prompt("Please choose a number of characters between 8 and 128.");

      // if statement varifying validity of user input, anything not a number will rerun the generator
      // given a valid input the user is asked for conditions for the password 
      // null passwordLength makes sure user isn't forced to continue through generator, if wanting to cancel right away they can cancel the generator
      if (passwordLength === null) {
        return;
        // creates range for length
      } else if (passwordLength < 8 || passwordLength > 128) {
      alert("The password must be between 8 and 128 characters.");
      return generatePassword();
        // validates if input is a number
      } else if (isNaN(passwordLength)) {
      alert("Please input a valid number.");
      return generatePassword();
        // continues main function with valid input
      } else {
        var isNum = confirm("Would you like to include numbers?");
        var isLow = confirm("Would you like to include lowercase letters?");
        var isUp = confirm ("Would you like to use uppercase letters?");
        var isSpecial = confirm("Would you like to include special characters?");
      };

      console.log(passwordLength);

      // user chooses what to include, if chosen, "characters" array concats each specified condition
      if (isNum === true) {
        characters = characters.concat(numbers);
      }
      if (isUp === true) {
        characters = characters.concat(lowerLetters);
      }
      if (isLow === true) {
        characters = characters.concat(upperLetters);
      }
      if (isSpecial === true) {
        characters = characters.concat(special);
      }

      console.log(characters);

      // for loop to randomly select characters from the chosen "characters" array the user created with their conditions
      // and creates a random "password" array that we display to the user
      for (var i=0; i<passwordLength; i++) 
        password += characters[Math.floor(Math.random() * characters.length )];
        console.log(password);
        return password;
    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
