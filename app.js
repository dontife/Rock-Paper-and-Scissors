// Write your JavaScript code here

let playerChoice = "";
let playerChoiceContainer = document.querySelector("#player-choice-container"); 
playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function handlePlayerChoice(event) {
    if (!event.target.classList.contains("emoji")) return;
    playerChoice = event.target.textContent;
    playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;
}