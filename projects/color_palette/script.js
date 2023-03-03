
import colors from './color.js'

const bodyContainer = document.getElementById("bodyContainer");
let selectedColors = [];

const colorData = colors.map(element => ({
    name: element.name,
    hex: element.hex
}));


//create divs for each element
function renderColorCards(colors) {
    bodyContainer.innerHTML = '';
    colors.forEach(color => {
         const  colorCardParent = document.createElement("div");
         colorCardParent.classList.add("card");
         const  colorProfilCard = document.createElement("div");
         colorProfilCard.classList.add("profil-card");
         const  colorProfilDescription = document.createElement("div");
         colorProfilDescription.classList.add("card-description");
         colorProfilCard.style.backgroundColor = color.hex;
         colorProfilDescription.innerText = color.name;
         colorCardParent.appendChild(colorProfilCard);
         bodyContainer.appendChild(colorCardParent);
         colorCardParent.appendChild(colorProfilDescription);   
    });
}

// render initial colors on page load
renderColorCards(colorData);

//add to palette (when user clicks on button the colors get added to an array and only the selected colors get rendered)
document.getElementById("addToPalette").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value.toUpperCase();
    console.log(userInput);
    if(!selectedColors.some(color => color.name.toUpperCase() === userInput)) {
        colorData.forEach(color =>  {
            if(color.name.toUpperCase() == userInput) {
                console.log("value found")
                selectedColors.push(color);
            }
        });
    }
    renderColorCards(selectedColors);
});

// search in palette and if not found render all colors
document.getElementById("searchInPalette").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value.toUpperCase();
    console.log(userInput);
    let colorFound = false;
    colorData.forEach(color =>  {
      if(color.name.toUpperCase() == userInput) {
        console.log("value found")
        const searchColor = color.name;
        renderColorCards([color]);
        colorFound = true;
      }
    });
    if (!colorFound) {
      renderColorCards(colorData);
    }
  });
  
