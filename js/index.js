let quotes = [
  {
    author: "Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "Albert Einstein",
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },
  {
    author: "Frank Zappa",
    quote: "“So many books, so little time.”",
  },
  {
    author: "Mae West",
    quote: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    author: "Mark Twain",
    quote: "“If you tell the truth, you don't have to remember anything.”",
  },
  {
    author: "Oscar Wilde",
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
  },
];

function generateQuote() {
  let i = Math.random() * quotes.length;
  document.getElementById("quota").innerHTML = quotes[Math.floor(i)].quote;
  document.getElementById("author").innerHTML = quotes[Math.floor(i)].author;
}
