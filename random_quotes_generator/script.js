const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Don't let the noise of others' opinions drown out your own inner voice. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The best way to predict the future is to invent it. - Alan Kay"
];

const quoteElement = document.getElementById("quote")
const generateBtn = document.getElementById("generate-btn")

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener("click", generateRandomQuote)
// generateRandomQuote()