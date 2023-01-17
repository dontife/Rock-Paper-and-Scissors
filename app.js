// Write your JavaScript code here

let playerChoice = "";
let computerChoice = "";
let emojis = ["✂️ ", "📄", "🪨"];
let emojiShuffleElement = document.querySelector("#emoji-shuffle");
let playerChoiceContainer = document.querySelector("#player-choice-container"); 
playerChoiceContainer.addEventListener("click", handlePlayerChoice);
let currentEmojiNumber = 0;
let shuffleIntervalID = setInterval(shuffleEmojis, 150);

function handlePlayerChoice(event) {
    if (!event.target.classList.contains("emoji")) return;
    playerChoice = event.target.textContent;
    playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;git 
    clearInterval(shuffleIntervalID);
    determineGameWinner();
}
function shuffleEmojis() {
    computerChoice = emojis[1];
    emojiShuffleElement.textContent = computerChoice;

    if (currentEmojiNumber < emojis.length - 1) {
        currentEmojiNumber++;
    } else {
        currentEmojiNumber = 0;
    }
}

function determineGameWinner() {
    var gameResultMessageElement = document.querySelector("#game-result-message");
    var gameResultMessage = "";

    if (playerChoice === computerChoice) {
        gameResultMessage = "It's a tie!";
        // Note the extra space in the scissors emoji!
    } else if (playerChoice === "🪨" && computerChoice === "✂️ ") {
        gameResultMessage = "Player wins!";
    } else if (playerChoice === "📄" && computerChoice === "🪨") {
        gameResultMessage = "Player wins!";
    } else if (playerChoice === "✂️ " && computerChoice === "📄") {
        gameResultMessage = "Player wins!";
    } else {
        gameResultMessage = "Computer wins!";
    }
    gameResultMessageElement.textContent = gameResultMessage + " Refresh to play again!";
}