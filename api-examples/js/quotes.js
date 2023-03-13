const quotesFetch = () => {
  fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data));
};

const displayQuotes = quote => {
  const blockQuotes = document.getElementById('quote');
  blockQuotes.innerText = quote.quote;
};
quotesFetch();
