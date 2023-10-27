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

//create an empty array
var joinedArray = [];


// Function to prompt user for password options
function getPasswordOptions() {
  var button = document.getElementById("generate");

//check if user clicks generate button
  button.addEventListener("click", () => {

//present to user different options
    var firstPrompt = prompt("How many characters in the password");
firstPrompt = parseInt(firstPrompt);
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

    //validate the users entry and check their responses
    if (firstPrompt < 8 || firstPrompt > 128) {
      alert(
        "The password must be at least 8 characters and no more than 128 characters"
      );
    } else {
      firstPrompt;

    }
    console.log(firstPrompt);

    //check users response and add to the joined array
    if (secondPrompt) {
      joinedArray.concat(upperCasedCharacters)
    } else {
      !secondPrompt;
    }

    console.log(joinedArray);

    if (thirdPrompt) {
      joinedArray.concat(lowerCasedCharacters)
    }
    console.log(joinedArray);

    if (fourthPrompt) {
      joinedArray.concat(numericCharacters)
    }

    console.log(joinedArray);

    if (fifthPrompt) {
      joinedArray.concat(specialCharacters)
    }

    console.log(joinedArray);
  });
}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}




// Function to generate password with user input
function generatePassword() {}

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
