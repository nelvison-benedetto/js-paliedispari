
function checkPalindroma(word){
    const inversedword = word.split("").reverse().join("");
    if(word == inversedword){
        return "palindroma";
    } else { return "no palindroma";}
}
const word = prompt("Please insert the word: ").replace(/\s+/g, "").toLowerCase();
alert(checkPalindroma(word));



let isWin = false;
const choice = prompt("Choose odd and even").replace(/\s+/g, "").toLowerCase();
const choicenum = parseInt(prompt("Insert a number between 1-5"));
const randomnum = Math.floor(Math.random() * 6);
const tot = choicenum + randomnum;
alert(`The tot is ${tot}`);

if(tot%2==0){
    if(choice =="even"){
        isWin = true;
    }
}
else{
    if(choice =="odd"){
        isWin = true;
    }
}
if (isWin){
    alert("You won!")
}
else{alert("You lost")}