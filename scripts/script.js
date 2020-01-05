(function() {
  var googleBox = document.getElementById("searchInput");
  var searchButton = document.getElementById("googleSearch");

  searchButton.addEventListener("click", function() {
    var userInput = googleBox.value;

    window.open("https://www.google.com/search?q=" + userInput);
  });
})();
