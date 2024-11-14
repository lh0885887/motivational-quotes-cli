// Name: Logan Hill
// Date: 11/13/2024
// Class: Web Development II
// Section: W01
// File Name: index.js

//import axios
const axios = require('axios');


function GetQuote() {

    //api call
    axios.get("https://zenquotes.io/api/random")
        .then(function (result) {

            // desired console output
            console.log("Here's a motivational quote for you:");
            console.log(`"${result.data[0].q}" - ${result.data[0].a}`);

        })
        .catch(function () {

            //desired error message
            console.error("Could not fetch a quote. Try again later.");
        });
};

GetQuote();