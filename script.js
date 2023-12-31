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

// create emppty array to store characters based on user responses to prompts
var joinedArray = [];

var randomlyGeneratedPassword = "";

// Function for getting a random element from an array
function getRandom(arr, size) {
  // starting with an empty result loop through the array and add a new random character to the result
  var result = "";
  for (var i = 0; i < size; i++) {
    var randomChar = Math.floor(Math.random() * arr.length);
    result += arr[randomChar];
  }
  return result;
}

// Function to prompt user for password options
function getPasswordOptions() {
  var button = document.getElementById("generate");

  button.addEventListener("click", () => {
    // var joinedArray = [];
    var firstPrompt = prompt("How many characters in the password");
    firstPrompt = parseInt(firstPrompt);

    //check if critera for length of password met?
    if (firstPrompt < 8 || firstPrompt > 128) {
      alert(
        "The password must be at least 8 characters and no more than 128 characters"
      );
      return;
    }

    // check if user input a number
    if (Number(!firstPrompt)) {
      alert("Please numerical characters");
      return;
    }

    //prompt user for other required characters
    var secondPrompt = confirm(
      "Do you want upper-case characters in the password?"
    );
    var thirdPrompt = confirm(
      "Do you want lower-case characters in the password?"
    );
    var fourthPrompt = confirm(
      "Do you want to include numbers in the password?"
    );
    var fifthPrompt = confirm(
      "Do you want special characters in the password?"
    );

    //as each prompt is presented add to array if user clicks ok button
    if (secondPrompt) {
      joinedArray = joinedArray.concat(upperCasedCharacters);
    }

    if (thirdPrompt) {
      joinedArray = joinedArray.concat(lowerCasedCharacters);
    }

    if (fourthPrompt) {
      joinedArray = joinedArray.concat(numericCharacters);
    }

    if (fifthPrompt) {
      joinedArray = joinedArray.concat(specialCharacters);
    }

    randomlyGeneratedPassword = getRandom(joinedArray, firstPrompt);
    generatePassword(randomlyGeneratedPassword);
    writePassword(randomlyGeneratedPassword);
  });
  // console.log(randomlyGeneratedPassword);
}

// Function to generate password with user input
function generatePassword(result) {
  // console.log(result);
  return result;
}

getPasswordOptions();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(randomlyGeneratedPassword);
  var passwordText = document.querySelector("#password");

  if (randomlyGeneratedPassword) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
