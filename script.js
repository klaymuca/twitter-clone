var tweetForm = document.getElementById("tweet-form");
var tweetInput = document.getElementById("tweet-input");
var characterCount = document.querySelector(".character-counter");
var timeLine = document.querySelector(".timeline");

tweetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var tweetText = tweetInput.value.trim();
    console.log(tweetText);
    tweetInput.value = "";
});



