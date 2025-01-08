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
// Funkcija sukurti žaidimo korteles
function createCards() {
  shuffle(symbols);
  gameBoard.innerHTML = ""; // Išvalome esamas korteles

  symbols.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-symbol", symbol);
    card.dataset.index = index;

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    //Kortele su priekyje vienspalve
    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");

    //Kitoj pusej simbolis
    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.innerText = symbol;

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}
// Funkcija apversti kortelę
function flipCard() {
  if (flippedCards.length === 2 || this.classList.contains("flipped")) return;

  this.classList.add("flipped");
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}
