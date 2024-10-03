document.getElementById("btn").addEventListener("click", function () {
  fetch("https://cat-fact.herokuapp.com/facts/random?amount=1")
    .then((response) => response.json())
    .then((data) => {
      const factText = data.text;

      const keywords = [
        "cat",
        "cats",
        "feline",
        "meow",
        "purr",
        "whiskers",
        "kitten",
        "paws",
      ];
      const containsKeyword = keywords.some((keyword) =>
        factText.toLowerCase().includes(keyword)
      );

      if (containsKeyword) {
        document.getElementById("fact").innerText = factText;
      } else {
        document.getElementById("fact").innerText =
          "Here’s a random fun fact about cats!";
      }
    })
    .catch((error) => {
      console.error("Error fetching cat fact:", error);
      document.getElementById("fact").innerText =
        "Could not fetch a cat fact. Please try again!";
    });
});
setInterval(() => {
  alert("MEOW!! MEOW!! MEOW!! MEOW!! MEOW!! MEOW!!");
}, 30000);
