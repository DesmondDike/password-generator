let generateButton = document.getElementById("generate-ed")
let inputText = document.getElementById("input-ed")
let inputedText = document.getElementById("sub-ed")
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]
let password = " "
let password2 = " "
let passwordLength = 12

function generate() {
 
  for (let i = 0; i <= 12; i++) {
   
    let randomNumber = Math.floor(Math.random() * characters.length)
    password += characters[randomNumber] 
  }
  inputText.value = password
  password = " "
  
  for (let i = 0; i <= passwordLength; i++) {
   
    let randomNumber2 = Math.floor(Math.random() * characters.length)
    password2 += characters[randomNumber2]
  }
  inputedText.value = password2
  password2 = " "

}

function resetButton(){
  
  inputText.value = " "
  inputedText.value = " "
  console.log()
}