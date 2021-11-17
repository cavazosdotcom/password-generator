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


// alert("this is a message");
// prompt("write password?");
// confirm("do you want to write a password?")
var myString = "Chris";

myString = 1;

myString += 1;


function generatePassword (){

  var password = "";
  var characters = []

  // console.log('generate a apassword.')

  // loop to repeat, selecting a random character and then appending it to the string
  // loop until our string reaches chosen length

  var passwordLength = 10;

  var isNumbers = true; // confirm ("do you want numbers?"; true;")
  if(isNumbers) {
    // password +=
    characters = characters.concat(numbers);
    console.log(characters);

  } 


  var isLowerLetters = true;
  var isUpperLetters = true;
  var isSpecial = true;

  

  // randomly select from available characters
  password += "a";

  console.log(password);

  password += "r";

  console.log(password);

  password += "5";

  console.log(password);

  password += "]";

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
