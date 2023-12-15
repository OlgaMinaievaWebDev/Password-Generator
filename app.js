// array of characters for password
const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordLength = 15;
//add event listener to Generate password button

const generatePasswordBtn = document.getElementById("generate");
let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");

generatePasswordBtn.addEventListener("click", function () {
  console.log("clicked");
  getPasswordOne();
 getPasswordTwo();
 copyTextOne();
});

//get password for button one and two
function getPasswordOne() {
  let arrayOne = [];
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    arrayOne.push(characters[randomIndex]);
  }
  passwordOne.textContent = arrayOne.join("");
}

function getPasswordTwo() {
  let arrayTwo = [];
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    arrayTwo.push(characters[randomIndex]);
  }
  passwordTwo.textContent = arrayTwo.join("");
}

