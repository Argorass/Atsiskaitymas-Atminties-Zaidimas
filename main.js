const symbols = [
  "🌙",
  "🍀",
  "🌟",
  "🌸",
  "⭐",
  "🌷",
  "🌙",
  "🍀",
  "🌟",
  "🌸",
  "⭐",
  "🌷",
];
const gameBoard = document.querySelector("#game-board");
const resetButton = document.querySelector("#reset-btn");
let flippedCards = [];
let matchedCards = 0;

// Funkcija maišyti korteles
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
