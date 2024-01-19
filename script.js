// Function to fetch a random quote from the Quotable API
async function getRandomQuote() {
    const apiUrl = 'https://api.quotable.io/random';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display the fetched quote on the HTML page
        const quoteElement = document.getElementById('quote');
        quoteElement.innerHTML = `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error.message);
    }
}

function copyToClipboard() {
    const quoteText = document.getElementById('quote').innerText;

    const textarea = document.createElement('textarea');
    textarea.value = quoteText;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    // Use Toastify to show a notification
    Toastify({
        text: 'Quote copied to clipboard!',
        duration: 3000, // Display duration in milliseconds
        gravity: 'bottom', // Display position: 'top' or 'bottom'
        position: 'left', // Display position: 'left', 'center', or 'right'
        backgroundColor: 'rgba(40, 167, 69, 0.8)', // Background color of the toast
        stopOnFocus: true, // Stop the notification timer on focus
    }).showToast();
}

// Fetch and display a random quote when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    getRandomQuote();
});

// Function to read the quote using text-to-speech
// Function to read the quote using text-to-speech
function readQuote() {
    const quoteText = document.getElementById('quote').innerText;

    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(quoteText);

        // Example: Set a specific voice (you can change this to another voice)
        const voices = window.speechSynthesis.getVoices();
        speech.voice = voices.find(voice => voice.name === 'Google UK English Female');

        speech.rate = 1; // Adjust the rate of speech if needed
        window.speechSynthesis.speak(speech);
    } else {
        alert('Text-to-speech is not supported in your browser.');
    }
}

// Fetch and display a random quote when the page is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     getRandomQuote();
// });

// Set up event listeners for buttons
// document.getElementById('refreshButton').addEventListener('click', getRandomQuote);
// document.getElementById('copyButton').addEventListener('click', copyToClipboard);
// document.getElementById('readButton').addEventListener('click', readQuote);