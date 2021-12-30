const quotes = [
  {
    quote:
      "The true performance shines even more in the completeness of the dish.",
    author: "- Hyunseok Choi -",
  },
  {
    quote:
      "The discovery of a new dish does more for human happiness than the discovery of a new star.",
    author: "- Jean Anthelme Brillat-Savarin -",
  },
  {
    quote: "Solo eats two chicken legs, but couples eat one chicken leg.",
    author: "- Internet Community -",
  },
  {
    quote: "If it's delicious, 0 calories.",
    author: "- Hwajung Choi -",
  },
  {
    quote: "It's better to cook one more ramen than ramen and cold rice.",
    author: "- Jongwon Baek -",
  },
  {
    quote: "Life ​is divided into before and after knowing chicken.",
    author: "- Internet Community -",
  },
  {
    quote:
      "You don't have to cook fancy or complicated masterpieces - just good food from fresh ingredients.",
    author: "- Julia Child -",
  },
  {
    quote:
      "It is a success to walk from failure to failure without losing passion.",
    author: "- Jongwon Baek -",
  },
  {
    quote: "Calories are proportional to taste.",
    author: "- Internet Community -",
  },
  {
    quote: "Good food ends with good talk",
    author: "- Geoffrey Neighor -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
