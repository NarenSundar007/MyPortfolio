function toggleMenu(){
  const menu = document.querySelector(".menu-links")
  const icon = document.querySelector(".hamburger-icon")

  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

const roles = ["Web-Developer", "Software Engineer", "Front-end Engineer", "a student", "a developer",  "a creator", "a learner", "a thinker", "a problem solver"];
let currentRoleIndex = 0;
let currentCharIndex = 0;
const roleElement = document.getElementById("role");

function typewriterEffect() {
const currentRole = roles[currentRoleIndex];

if (currentCharIndex < currentRole.length) {
  roleElement.textContent += currentRole.charAt(currentCharIndex);
  currentCharIndex++;
  setTimeout(typewriterEffect, 100); // Speed of typing (100ms per character)
} else {
  setTimeout(deleteEffect, 2000); // Wait before starting to delete
}
}

function deleteEffect() {
if (currentCharIndex > 0) {
  roleElement.textContent = roleElement.textContent.slice(0, -1);
  currentCharIndex--;
  setTimeout(deleteEffect, 50); // Speed of deleting (50ms per character)
} else {
  currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role
  setTimeout(typewriterEffect, 500); // Start typing the next role after a brief pause
}
}

// Start the typewriter effect
typewriterEffect();


const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1000, fill: "forwards" });
}