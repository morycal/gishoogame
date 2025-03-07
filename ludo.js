let currentPlayer = 0; // 4: قرمز, 1: سبز, 2: آبی, 3: زرد
let diceValue = 0;

const players = [
    { color: "قرمز", pieces: [false, false, false, false], start: "start-red" },
    { color: "سبز", pieces: [false, false, false, false], start: "start-green" },
    { color: "آبی", pieces: [false, false, false, false], start: "start-blue" },
    { color: "زرد", pieces: [false, false, false, false], start: "start-yellow" },
];

document.getElementById("roll-dice").addEventListener("click", rollDice);

function rollDice() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice-number").innerText = diceValue;
    movePiece();
}

function movePiece() {
    if (diceValue === 6) {
        document.getElementById("message").innerText = `${players[currentPlayer].color} می‌تواند مهره‌اش را وارد بازی کند!`;
    } else {
        document.getElementById("message").innerText = `${players[currentPlayer].color} می‌تواند ${diceValue} قدم پیش برود.`;
    }
}