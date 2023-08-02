const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

function generatePasswords() {
    let passwordLength = 15
    let randIdx = 0
    let passwords = []
    
    for (let j = 0; j < 2; j++) {
        let password = ""
        for(let i = 0; i < passwordLength; i++){
            randIdx = Math.floor(Math.random()*characters.length)
        
            password += characters[randIdx]
        }
        
        passwords.push(password)
    }
    
    passwordOne.textContent = passwords[0]
    passwordTwo.textContent = passwords[1]           
   
}


