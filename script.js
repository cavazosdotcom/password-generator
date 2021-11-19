// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","@","#","$","%","^","&","*","(",")","-","_","~","`","=","+",";",":","/","?",".",",",">","<","[","]","{","}"];


// Data = array, strings, numbers, booleans

//  Modify Data = Reassigning a new value to an existing variable

//  Create new data

//  Gather data from the user

//  Modify Existing data

//  Validate data (comparison operators IF/ELSE 


function generatePassword (){

  var password = "";
  var characters = []

  var passwordLength = prompt("Please choose a number of characters between 8 and 128.");

      if (passwordLength === null) {
        return;
      } else if (passwordLength < 8 || passwordLength > 128) {
      alert("The password must be between 8 and 128 characters.");
      return generatePassword();
      } else if (isNaN(passwordLength)) {
      alert("Please input a valid number.");
      return generatePassword();
      } else {
        var isNum = confirm("Would you like to include numbers?");
        var isLow = confirm("Would you like to include lowercase letters?");
        var isUp = confirm ("Would you like to use uppercase letters?");
        var isSpecial = confirm("Would you like to include special characters?");
      };

      console.log(typeof(passwordLength));
      console.log(passwordLength);

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
