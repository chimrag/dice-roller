function rollDice() {
    let number = Math.floor(Math.random() * 6) + 1; 
    document.getElementById("dice").innerText = number;
}
