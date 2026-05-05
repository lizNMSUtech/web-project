// Project 4 - Trip Planner JavaScript
// ICT 280 - NMSU

// Grab references to the elements we need from the page
const planButton = document.getElementById('plan-button');
const nameInput = document.getElementById('traveler-name');
const destinationInput = document.getElementById('destination');
const messageDiv = document.getElementById('trip-message');

// A small collection of travel tips for the response
const travelTips = [
    "Pack light. You will thank yourself later.",
    "Carry a copy of your ID separate from the original.",
    "Try at least one local dish you cannot pronounce.",
    "Talk to people. The best recommendations rarely come from guidebooks.",
    "Leave room in your bag for things you bring back home."
];

// Function that builds the personalized trip message
function planTrip() {
    const name = nameInput.value.trim();
    const destination = destinationInput.value.trim();

    // Check that both fields are filled in
    if (name === '' || destination === '') {
        messageDiv.textContent = 'Please enter both your name and a destination.';
        messageDiv.classList.add('show');
        return;
    }

    // Pick a random tip from the list
    const randomTip = travelTips[Math.floor(Math.random() * travelTips.length)];

    // Build the personalized greeting
    const greeting = 'Hello ' + name + '! Your trip to ' + destination + ' sounds great. ' +
                     'Here is a tip to keep in mind: ' + randomTip;

    messageDiv.textContent = greeting;
    messageDiv.classList.add('show');
}

// Main event listener: button click triggers the function
planButton.addEventListener('click', planTrip);

// Extra event listeners: pressing Enter in either input also submits
nameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        planTrip();
    }
});

destinationInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        planTrip();
    }
});
