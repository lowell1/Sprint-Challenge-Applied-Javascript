// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function CreateTab(topic) {
    var myDiv = document.createElement("div");
    myDiv.classList.add("tab");
    myDiv.textContent = topic;

    myDiv.addEventListener("click", function() {
        document.querySelectorAll(".cards-container .card").forEach(function(card) {
            card.classList.forEach(function(className) {
                if(topic === "ALL" || topic.toLowerCase().indexOf(className) !== -1) {
                    card.style.removeProperty("display");
                } else {
                    card.style.display = "none";
                }
            });
        })
    });

    return myDiv;
}

var topicsElement = document.querySelector(".topics");

topicsElement.append(CreateTab("ALL"));

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(function(data) {
        // console.log(data.data.topics);
        data.data.topics.forEach(function(val) {
            topicsElement.append(CreateTab(val));
        });
    })
    .catch(function(err) {
        console.log(err);
    });