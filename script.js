function rollDice() {
    let dice = document.getElementById("dice");

    
    dice.classList.add("roll");


    setTimeout(() => {
        let number = Math.floor(Math.random() * 6) + 1;
        dice.innerText = number;

        
        dice.classList.remove("roll");
    }, 600);
}
