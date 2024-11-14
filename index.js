// Name: Logan Hill
// Date: 11/13/2024
// Class: Web Development II
// Section: W01
// File Name: index.js

// Import axios
const axios = require('axios');


// Local quote library
const quotes = [
    "Success is not final, failure is not fatal; it is the courage to continue that counts. — Winston Churchill",
    "The journey of a thousand miles begins with one step. — Lao Tzu",
    "To live a fulfilled life, we need to keep creating the 'what is next' of our lives. — Mark Twain",
    "Shoot for the moon. Even if you miss, you'll land among the stars. — Norman Vincent Peale",
    "Setting goals is the first step in turning the invisible into the visible. — Tony Robbins",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "To win big, you sometimes have to take big risks. — Bill Gates",
    "Success means having the courage, the determination, and the will to become the person you believe you were meant to be. — George A. Sheehan",
    "No matter what people tell you, words and ideas can change the world. — Robin Williams",
    "Push yourself, because no one else is going to do it for you. — Anonymous"
];


function GetQuote() {
    // Set up a border
    const border = "*".repeat(50);

    // API call to get a random quote
    axios.get("https://zenquotes.io/api/random")
        .then(function (result) {
            const quote = result.data[0].q;
            const author = result.data[0].a;

            // Custom formatting for the greeting using border
            console.log(border);
            console.log("*                                              *");
            console.log("*    --- Here's a motivational quote for you: ---");
            console.log("*                                              *");
            console.log(border);

            // Custom formatting for the quote and author
            console.log(`\n"${quote}"\n`);
            console.log(`         ~ ${author} ~\n`);

            console.log(border);

        })
        .catch(function () {
            // Generate random number for indexing quote library
            const randomNumber = Math.floor(Math.random() * quotes.length);

            // Establish fallback quote
            const fallbackQuote = quotes[randomNumber];

            // Format greeting
            console.log(border);
            console.log("*                                              *");
            console.log("*    --- Here's a motivational quote for you: ---");
            console.log("*                                              *");
            console.log(border);

            // Format the fallback quote
            console.log(`\n"${fallbackQuote}"\n`);

            console.log(border);

            // Logic to ensure proper indexing
            if (randomNumber < 0 || randomNumber > quotes.length) {

                // Error message
                console.log("Could not fetch a quote. Try again later.");

            }
        });
}

GetQuote();