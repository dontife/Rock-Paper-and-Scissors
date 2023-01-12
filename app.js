// Write your JavaScript code here

let playerChoice = "";
let computerChoice = "";
let emojis = ["✂️ ", "📄", "🪨"];
let emojiShuffleElement = document.querySelector("#emoji-shuffle");
let playerChoiceContainer = document.querySelector("#player-choice-container"); 
playerChoiceContainer.addEventListener("click", handlePlayerChoice);
shuffleEmojis();

function handlePlayerChoice(event) {
    if (!event.target.classList.contains("emoji")) return;
    playerChoice = event.target.textContent;
    playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;git 
}
function shuffleEmojis() {
    computerChoice = emojis[1];
    emojiShuffleElement.textContent = computerChoice;

}