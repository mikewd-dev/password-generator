// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var passwordArray = specialCharacters.concat(upperCasedCharacters).concat(lowerCasedCharacters).concat(numericCharacters);

// Function to prompt user for password options
function getPasswordOptions() {
  // var button = document.getElementById("generate");
  var prompts = [
    "password must be at least 8 characters but no more than 128",
    "Characters can be uppercase, lowercase, numeric or special characters",
  ];



  document.addEventListener("load", () => {
    for (var i = 0; i < prompts.length; i++) {
      var firstPrompt  = prompt(prompts[0]);
var secondPrompt = prompt(prompts[1]);
    }
//  var password  = prompt("Enter your password");
console.log(firstPrompt, secondPrompt);
  });

}



getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {
var randomChar = Math.floor(Math.random(8, 129) * arr.length );
return arr[randomChar]

}

// console.log(getRandom(passwordArray));
console.log(getRandom(lowerCasedCharacters));
console.log(getRandom(upperCasedCharacters));
console.log(getRandom(specialCharacters));
console.log(getRandom(numericCharacters));


// Function to generate password with user input
function generatePassword() {

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
