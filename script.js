// Global variable
let animationSpeed = 1000;

// Function with parameters and return value
function calculateDelay(base, multiplier) {
  return base * multiplier;
}

// Trigger box animation
function animateBox() {
  const box = document.getElementById("animatedBox");
  box.classList.remove("slide-in"); // Reset if already animated
  void box.offsetWidth; // Force reflow
  box.classList.add("slide-in");
}

document.getElementById("animateBtn").addEventListener("click", animateBox);

// Flip card on click
function flipCard(cardId) {
  const card = document.getElementById(cardId);
  card.classList.toggle("flipped");
}

// Modal controls
function showModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("fade-in");
}

function hideModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("fade-in");
}
