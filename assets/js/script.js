// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// character arrays
var lowercase = [];
var uppercase = [];
var numeric = [];
var special = [];

// generate the password bassed on prompted criteria
function generatePassword() {
  var password = "";
  var passwordCriteria = {
    length: 0,
    characterTypes: {
      lowercase: false,
      uppercase: false,
      numeric: false,
      special: false
    }
  };

  legnthCriteria(passwordCriteria);
  characterCriteria(passwordCriteria);
  password = passwordGenerator(passwordCriteria);
  return password;

}

// length of password criteria
function legnthCriteria(passwordCriteria) {
  // 8-128 characters
  return passwordCriteria;
}

// character types of password criteria
function characterCriteria(passwordCriteria) {
  // lowercase, uppercase, numeric, and/or special characters
  return passwordCriteria;
}

// generate password bassed on criteria
function passwordGenerator(passwordCriteria) {
  var password = "";
  //random
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
