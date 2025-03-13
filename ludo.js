let currentPlayer = 0;
const players = [
    { position: 0, color: 'red' },
    { position: 0, color: 'green' }
];

const cells = document.querySelectorAll('.cell');
const rollButton = document.getElementById('rollButton');
const statusDisplay = document.getElementById('status');

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => movePlayer(index));
});

rollButton.addEventListener('click', rollDice);

function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    statusDisplay.innerText = `Player ${currentPlayer + 1} rolled a ${diceRoll}`;
    movePlayer(diceRoll);
}

function movePlayer(steps) {
    const player = players[currentPlayer];
    let newPosition = player.position + steps;

    if (newPosition >= cells.length) {
        newPosition = cells.length - 1; // Limit to board size
        statusDisplay.innerText += ` - Player ${currentPlayer + 1} has reached the end!`;
    }

    player.position = newPosition;
    updateBoard();
    currentPlayer = (currentPlayer + 1) % players.length;
}

function updateBoard() {
    cells.forEach(cell => cell.style.backgroundColor = '#fff');
    players.forEach((player, index) => {
        if (player.position < cells.length) {
            cells[player.position].style.backgroundColor = player.color;
        }
    });
}