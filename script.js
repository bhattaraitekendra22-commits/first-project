// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth small bounce effect on skill cards when clicked
document.querySelectorAll('.skill-card').forEach((card) => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.95)';
    setTimeout(() => { card.style.transform = ''; }, 180);
  });
});