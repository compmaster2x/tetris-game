const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { quote: "Don't let the noise of others' opinions drown out your own inner voice.", author: "Steve Jobs" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" }
];


const quoteElement = document.getElementById("quote")
const generateBtn = document.getElementById("generate-btn")
const quoteAuthorElement = document.getElementById("author")
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const {quote, author: quoteAuthor} = randomQuote

    // const quote  = randomQuote.quote;
    // const quoteAuthor = randomQuote.author;
    quoteElement.textContent = quote;
    quoteAuthorElement.textContent = quoteAuthor;
}

generateBtn.addEventListener("click", generateRandomQuote)
generateRandomQuote()