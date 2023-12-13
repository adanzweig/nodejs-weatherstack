# Weatherstack API Temperature Fetcher

## Description
This Node.js application retrieves the current temperature for a specified location using the Weatherstack API. It's a simple, yet effective demonstration of making API requests with Axios in a Node.js environment.

## Features
- Fetches real-time temperature data.
- Utilizes environment variables for API key management.
- Implements error handling for API requests.

## Installation

Before running this project, ensure you have Node.js installed on your system.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adanzweig/nodejs-weatherstack.git
   cd nodejs-weatherstack
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   - Create a `.env` file in the project root.
   - Add the following line (replace `your_api_key` with your actual Weatherstack API key):
     ```
     API_KEY=your_api_key
     ```

## Usage

Run the script with Node.js:

```bash
node index.js
```

By default, the script fetches the temperature for Los Angeles. You can modify the `getCurrentTemperature('Los Angeles')` call in `index.js` to a different location of your choice.

## Contributing
Feel free to fork the repository and submit pull requests.
