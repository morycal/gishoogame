function startRockPaperScissors() {
    document.getElementById('rock-paper-scissors-game').style.display = 'block';
    const choices = document.querySelectorAll('.choice');
    const result = document.getElementById('result');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.dataset.choice;
            const computerChoice = getComputerChoice();
            const winner = determineWinner(userChoice, computerChoice);
            result.innerText = `شما: ${userChoice} - کامپیوتر: ${computerChoice}. نتیجه: ${winner}`;
        });
    });
}

function getComputerChoice() {
    const random = Math.random();
    if (random < 0.34) return 'rock';
    if (random < 0.67) return 'paper';
    return 'scissors';
}

function determineWinner(user, computer) {
    if (user === computer) return "مساوی!";
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return "شما برنده‌اید!";
    }
    return "کامپیوتر برنده‌است!";
}