// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

var cardsContainer = document.querySelector(".cards-container");

function CreateCard(info) {
    const cardDiv = document.createElement("div"),
    headlineDiv = document.createElement("div"),
    authorDiv = document.createElement("div"),
    imgDiv = document.createElement("div"),
    imgImg = document.createElement("img"),
    authorNameSpan = document.createElement("span");

    cardDiv.append(headlineDiv);
    cardDiv.append(authorDiv);
    authorDiv.append(imgDiv);
    imgDiv.append(imgImg);
    authorDiv.append(authorNameSpan);

    cardDiv.classList.add("card");
    headlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgDiv.classList.add("img-container");

    headlineDiv.textContent = info.headline;
    imgImg.src = info.authorPhoto;
    authorNameSpan.textContent = info.authorName;

    return cardDiv;
}

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(function(response) {
        // console.log(response.data.articles);
        for(var i in response.data.articles) {
            // console.log(key, response.data.articles[i]);
            for(var j in response.data.articles[i]) {
                cardsContainer.append(CreateCard(response.data.articles[i][j]));
            }
        }
    })
    .catch(function(err) {
        console.log(err);
    });