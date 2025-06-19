// Typewriter effect
const text = "Frontend Web Developer | Programmer";
let index = 0;
const typedText = document.querySelector(".typed-text");

function type() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;

// Simple scroll reveal animation (optional)
const cards = document.querySelectorAll(".project-card");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.9;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
});
// Show achievements on scroll
const achievements = document.querySelectorAll(".achievement");

function showOnScroll() {
  achievements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
