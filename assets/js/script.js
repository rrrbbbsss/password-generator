// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate the password bassed on prompted criteria
function generatePassword() {
  var password = "";
  var passwordCriteria = {
    length: 0,
    characterTypes: {
      lowercase: "abcdefghijklmnopqrstuvwxy",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXY",
      numeric: "0123456789",
      special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
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
  var length = 0;
  // prompt code
  passwordCriteria.length = length;
}

// character types of password criteria
function characterCriteria(passwordCriteria) {
  // lowercase, uppercase, numeric, and/or special characters
  var characterTypes = {};
  passwordCriteria.characterTypes = characterTypes;
}

// generate password bassed on criteria
function passwordGenerator(passwordCriteria) {
  var password = "";
  var characterTypeCriteria = passwordCriteria.characterTypes;
  // from criteria, create chartypes array that contains the keys that will be used.
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
