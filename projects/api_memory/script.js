document.getElementById("easy").addEventListener("click", function() {
    const chooseDifficulty = document.getElementById("chooseDifficulty");
    chooseDifficulty.innerHTML = '';
    const manualText = document.getElementById("manualText");
    manualText.innerHTML = 'Click on the cats that match to win!';
    let amountOfCats = 8;
    startGame(amountOfCats);
});

document.getElementById("medium").addEventListener("click", function() {
    const chooseDifficulty = document.getElementById("chooseDifficulty");
    chooseDifficulty.innerHTML = '';
    const manualText = document.getElementById("manualText");
    manualText.innerHTML = 'Click on the cats that match to win!';
    let amountOfCats = 16;
    startGame(amountOfCats);
});

document.getElementById("hard").addEventListener("click", function() {
    const chooseDifficulty = document.getElementById("chooseDifficulty");
    chooseDifficulty.innerHTML = '';
    const manualText = document.getElementById("manualText");
    manualText.innerHTML = 'Click on the cats that match to win!';
    let amountOfCats = 32;
    startGame(amountOfCats);
});

document.getElementById("custom").addEventListener("click", function() {
    const chooseDifficulty = document.getElementById("chooseDifficulty");
    chooseDifficulty.innerHTML = '';
    const manualText = document.getElementById("manualText");
    manualText.innerHTML = 'Click on the cats that match to win!'
    let amountOfCats = Number(prompt("Input how many cats you want to find."))*2;
    startGame(amountOfCats);
});



function startGame(amountOfCats) {

const catArray = [];

Promise.all(
  Array.from({ length: amountOfCats / 2 }, () =>
    fetch(
      "https://api.thecatapi.com/v1/images/search?api_key=live_NkgNk1TL6RIsKzuDzpzJRITI9P7taFwTA5W90zZgTodHm5Mzw685eBWgvbtnvUsv"
    )
      .then((response) => response.json())
      .then((response) => response[0].url)
  )
)
  .then((urls) => {
    // Create two copies of the URLs and attach them
    catArray.push(...urls, ...urls);

    // Shuffle the array
    for (let i = catArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [catArray[i], catArray[j]] = [catArray[j], catArray[i]];
    }

    // Create the memory game cards
    const memoryContainer = document.getElementById("memoryContainer");
    for (let i = 0; i < amountOfCats; i++) {
      const memoryCard = document.createElement("div");
      memoryCard.classList.add("card");

      const image = document.createElement("img");
      image.classList.add("card-img-top");
      image.classList.add("hidden"); // add hidden class initially
      image.src = catArray[i];

      memoryCard.appendChild(image);
      memoryContainer.appendChild(memoryCard);
    }

   
  });
}
// Add event listener to memoryContainer
const memoryContainer = document.getElementById("memoryContainer");
let flippedCards = [];
memoryContainer.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  const image = card.querySelector(".card-img-top");

  if (card && !card.classList.contains("flipped") && flippedCards.length < 2) {
    card.classList.add("flipped");
    image.classList.remove("hidden");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const firstCard = flippedCards[0];
      const secondCard = flippedCards[1];
      const firstImage = firstCard.querySelector(".card-img-top");
      const secondImage = secondCard.querySelector(".card-img-top");

      if (firstImage.src === secondImage.src) {
        // Matched!
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        const manualText = document.getElementById("manualText");
        manualText.innerHTML = 'That was a match! Nice!';
      } else {
        // Not a match
        setTimeout(() => {
          const manualText = document.getElementById("manualText");
          manualText.innerHTML = 'Try again';
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          firstImage.classList.add("hidden");
          secondImage.classList.add("hidden");
        }, 1000);
      }

      flippedCards = [];
    }
  }
});
