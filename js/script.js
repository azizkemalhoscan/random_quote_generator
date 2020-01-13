/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
var quotes = [{
  quote: "Be yourself; everyone else is already taken",
  source: "Oscar Wilde",
  citation: "Lippincott’s Monthly Magazine",
  year: 1890
},{
  quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  source: "Mahatma Gandhi",
},{
  quote: "We must not allow other people’s limited perceptions to define us.",
  source: "Virginia Satir"
},{
  quote: "If you cannot do great things, do small things in a great way.",
  source: "Napoleon Hill",
  citation: "Think and Grow Rich",
  year: 1937
},{
  quote: "If opportunity doesn’t knock, build a door.",
  source: "Milton Berle",
}];

// console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}
console.log(getRandomQuote());

/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote(quotes)
  let typeOnScreen = '';
  typeOnScreen += '<p class="quote">' + randomQuote.quote + '</p>';
  typeOnScreen += '<p class="source">' + randomQuote.source;
  if( randomQuote.citation) {
  typeOnScreen += '<span class="citation">' + randomQuote.citation + '</span>';
};
  if(randomQuote.year){
  typeOnScreen += '<span class="year">' + randomQuote.year + '</span>';
};
  typeOnScreen +='</p>';

  document.getElementById('quote-box').innerHTML = typeOnScreen;

}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

