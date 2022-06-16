// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate the password bassed on prompted criteria
function generatePassword() {
  // object to hold password criteria
  var passwordCriteria = {};

  // get length criteria
  passwordCriteria.length = lengthCriteria();
  // if prompt cancelled, then return empty password.
  if (passwordCriteria.length === false) {
    return "";
  }
  // get character type criteria
  passwordCriteria.characterTypes = characterCriteria();

  // return generated password
  return passwordGenerator(passwordCriteria);
}

// length of password criteria
function lengthCriteria() {
  // 8-128 characters
  while (true) {
    var input = prompt("Enter the length of the password (8-128 characters):");
    var length = parseInt(input);
    // validate if cancel was hit
    if (input === null) {
      alert("Generate Password Cancelled.");
      return false;
    }
    // validate that there is no junk input
    else if (input !== parseInt(input).toString()) {
      alert("Incorrect Characters Entered: " + input + "\nThe password length must be a valid integer.\nPlease re-enter the length criteria.");
    }
    // validate minimum length
    else if (length < 8) {
      alert("Incorrect Length Entered: " + input + "\nThe password length must be at least 8 characters long.\nPlease re-enter the length criteria.");
    }
    // validate maximum length
    else if (length > 128) {
      alert("Incorrect Length Entered: " + input + "\nThe password length must be at most 128 characters long.\nPlease re-enter the length criteria.");
    }
    // return validated length value
    else {
      return length;
    }
  }
}

// character types of password criteria
function characterCriteria() {
  // the not so anonymous function that will be used to prompt for input, set the charactertypes array, and contain validation.
  var foldlambda = function (acc, key) {
    // prompt for input
    input = confirm("Use " + key + " characters?\n(ok: yes, cancel: no):");
    // if false, then update the key's value to false so that charactertype will not be used in password.
    if (!input) {
      characterTypes[key] = input;
    }
    // return the validation that at least one character type will be used in password;
    return acc || input;
  }

  while (true) {
  // special chars from: https://owasp.org/www-community/password-special-characters
    var characterTypes = {
      lowercase: "abcdefghijklmnopqrstuvwxy",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXY",
      numeric: "0123456789",
      special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    };

    // reduce the array of keys of characterTypes, the output will be true if at least one character type was selected.
    getinputs = Object.keys(characterTypes).reduce(foldlambda, false);
    // validate that at least one character type was selected by otherwise error
    if (!getinputs) {
      alert("Incorrect Character Type Criteria:\nYou must use at least one character type.\nPlease re-enter character type criteria.")
    }
    else {
      return characterTypes;
    }
  }
}

// create password bassed on criteria
function passwordGenerator(passwordCriteria) {
  var password = "";
  var characterTypeCriteria = passwordCriteria.characterTypes;
  // from criteria, create an array that contains the keys that lookup non-false values.
  var characterTypes = Object.keys(characterTypeCriteria).filter((key) => characterTypeCriteria[key]);
  // build up password
  for (var i = 0; i < passwordCriteria.length; i++) {
    // pick a random chartype key from charTypes
    var key = characterTypes[randomGenerator(characterTypes.length)];
    var charlist = characterTypeCriteria[key];
    // pick a random character of that chartype
    var char = charlist[randomGenerator(charlist.length)];
    // add it to password.
    password = char + password;
  }
  return password;
}

// generate a random int r such that it can be used as an index: 0 <= r <= (n - 1) 
function randomGenerator(n) {
  number = Math.floor((Math.random() * n));
  return number;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
