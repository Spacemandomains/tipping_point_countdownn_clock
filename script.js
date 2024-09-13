// Set the target date for the countdown (January 1, 2030)
let countdownDate = new Date('January 1, 2030 00:00:00');

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? '0' + days : days;
    document.getElementById("hours").textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-display").innerHTML = "2030 has arrived!";
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Function to calculate and display estimated time added
function updateEstimatedTime() {
    const quantity = document.getElementById("quantity").value;
    const timeAdded = quantity * 2; // 2 minutes per shirt
    document.getElementById("time-added").textContent = timeAdded;
}

// Event listener for quantity input changes
document.getElementById("quantity").addEventListener("input", updateEstimatedTime);

// Function to handle purchase button click
document.getElementById("purchase-button").addEventListener("click", function() {
    const quantity = document.getElementById("quantity").value;
    const timeAdded = quantity * 2; // 2 minutes per shirt

    // Update countdown date manually for demonstration (you would handle this server-side in a real application)
    countdownDate.setMinutes(countdownDate.getMinutes() + timeAdded);

    updateCountdown(); // Update the countdown immediately after purchase

    // Redirect to Stripe payment (simulate for demo)
    alert(`You are purchasing ${quantity} Polo shirts. Redirecting to payment...`);
});

// Initial call to display the countdown
updateCountdown();
