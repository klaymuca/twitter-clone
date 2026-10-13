var tweetForm = document.getElementById("tweet-form");
var tweetInput = document.getElementById("tweet-input");
var characterCount = document.querySelector(".character-counter");
var timeLine = document.querySelector(".timeline");

tweetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var tweetText = tweetInput.value.trim();
    if (tweetText.length === 0) {
        console.log("Tweet cannot be empty.");
        return;
    }
    if (tweetText.length > 280) {
        console.log("Tweet exceeds the maximum character limit of 280.");
        return;
    }
    createTweetElement(tweetText);
    tweetInput.value = "";
});

function createTweetElement(tweetText) {
    var post = {
        text: tweetText,
        id: Date.now(),
        likes: 0
    };

    var tweetElement = document.createElement("li");

    var usernameElement = document.createElement("p");
    usernameElement.textContent = "@username";

    var tweetTextElement = document.createElement("p");
    tweetTextElement.textContent = tweetText;
    tweetTextElement.className = "tweet-content";

    var timestampElement = document.createElement("i");
    timestampElement.textContent = new Date().toLocaleTimeString();
    timestampElement.className = "timestamp";


    var likeButton = document.createElement("button");
    likeButton.textContent = "Like";
    likeButton.className = "like-button";

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    tweetElement.appendChild(usernameElement);
    tweetElement.appendChild(tweetTextElement);
    tweetElement.appendChild(timestampElement);
    tweetElement.appendChild(likeButton);
    tweetElement.appendChild(deleteButton);

    timeLine.prepend(tweetElement);
}