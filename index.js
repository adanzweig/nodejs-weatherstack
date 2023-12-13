// Load environment variables from a .env file
require('dotenv').config();

// Import the axios library for making HTTP requests
const axios = require('axios');

// Async function to get the current temperature of a given place
async function getCurrentTemperature(place){
    try{
        // Setting up parameters for the API request, including the API key and the query (place)
        const params = {
            access_key: process.env.API_KEY, // API key stored in environment variables for security
            query: place // The place for which we want the weather data
        }

        // Making a GET request to the weatherstack API with the configured parameters
        const response = await axios.get(`http://api.weatherstack.com/current`, { params });

        // Returning a string that includes the place and its current temperature
        return `Current temperature in ${place} is ${response.data.current.temperature}`;
    } catch(error) {
        // Error handling: logs the error if the API request fails
        console.error('error', error);
    }
}

// Self-invoking async function to execute the temperature retrieval
(async () => {
    // Retrieve and store the temperature of Los Angeles
    const temp = await getCurrentTemperature('Los Angeles');

    // Log the temperature to the console
    console.log(temp);
})()
