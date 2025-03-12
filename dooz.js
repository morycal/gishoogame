const gameContainer = document.getElementById('game');
const statusDisplay = document.getElementById('status');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

const createBoard = () => {
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.setAttribute('data-index', index);
        cellElement.innerText = cell;

        cellElement.addEventListener('click', handleCellClick);
        gameContainer.appendChild(cellElement);
    });
};

const handleCellClick = (event) => {
    const index = event.target.getAttribute('data-index');
    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        event.target.innerText = currentPlayer;
        if (checkWinner()) {
            statusDisplay.innerText = `Player ${currentPlayer} Wins!`;
        } else if (board.every(cell => cell !== '')) {
            statusDisplay.innerText = 'It\'s a Draw!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;
        }
    }
};

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
};

createBoard();
statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;