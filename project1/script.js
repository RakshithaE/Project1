let score = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display the player's choice image
    document.getElementById('playerImage').src = `images/${playerChoice}.png`;

    // Display the computer's choice image
    document.getElementById('computerImage').src = `images/${computerChoice}.png`;

    const result = getResult(playerChoice, computerChoice);
    document.getElementById('outcome').innerHTML = `Result: ${result}`;

    updateScore(result);
    document.getElementById('score').innerHTML = `Score: ${score}`;
}

function getResult(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
        (player === 'paper' && (computer === 'rock' || computer === 'spock')) ||
        (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
        (player === 'lizard' && (computer === 'spock' || computer === 'paper')) ||
        (player === 'spock' && (computer === 'scissors' || computer === 'rock'))
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function updateScore(result) {
    if (result === "You win!") {
        score++;
    } else if (result === "Computer wins!") {
        score--;
    }
}
