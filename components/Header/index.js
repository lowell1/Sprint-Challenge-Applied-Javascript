// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const container = document.createElement("div"),
    myH1 = document.createElement("h1"),
    mySpan = document.createElement("span"),
    myOtherSpan = document.createElement("span");

    container.classList.add("header");
    mySpan.classList.add("date");
    mySpan.textContent = "SMARCH 28, 2019";
    myH1.textContent = "Lambda Times";
    myOtherSpan.classList.add("temp");
    myOtherSpan.textContent = "98°";

    container.append(mySpan);
    container.append(myH1);
    container.append(myOtherSpan);

    return container;
}

document.querySelector(".header-container").append(Header());
