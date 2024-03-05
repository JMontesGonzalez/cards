// input placeholders
let image = document.querySelector(".image");
let deckName = document.querySelector(".deck-name");
let company = document.querySelector(".company");
let deckLink = document.querySelector(".deck-link");
let display = document.querySelector(".display");

// button
let add = document.querySelector(".add");

// starting decks
let deck1 = {
deck_image:"spiderManDeck.png",
deck_name:"Spider-Man",
deck_company:"Theory 11",
deck_link:"https://store.theory11.com/products/spiderman-playing-cards"
};
let deck2 ={
  deck_image:"harryPotterDeck.png",
  deck_name:"Harry Potter",
  deck_company:"Theory 11",
  deck_link:"https://store.theory11.com/products/harry-potter-playing-cards"
};

let deck3 ={
  deck_image:"loveMeDeck.png",
  deck_name:"Love Me",
  deck_company:"Theory 11",
  deck_link:"https://store.theory11.com/collections/playingcards/products/love-me"
};


let collection = [deck1, deck2, deck3]


// function to display decks

function addDeckInfo(){
  let imageValue = image.value;
  let nameValue = deckName.value;
  let companyValue = company.value;
  let linkValue = deckLink.value;

 //newdeck info where they put little info about the deck
  
  let newDeck = {
      deck_image: imageValue,
      deck_name: nameValue,
      deck_company: companyValue,
      deck_link: linkValue,

  
}
   collection.push(newDeck);
}

// displayDeckInfo inital location
function displayDeckInfo() {

  
  collection.forEach(function(item) {
    display.insertAdjacentHTML('beforeend',
      `<div class="container">

  <img src="${item.deck_image}">
 <div class="head">
    <h4>${item.deck_name}</h4>
    <h4>${item.deck_company}</h4>
    <a href=${item.deck_link}target="_blank">Click!</a>
  </div>

</div>`)

  });

}
  







// onclick function
add.onclick = function() {
  emptyDisplay();
  addDeckInfo();
  displayDeckInfo();
};

// displayDeckInfo function loction 2
displayDeckInfo();

// emptyDisplay inital function
function emptyDisplay(){
display.innerHTML = "";
  
}
