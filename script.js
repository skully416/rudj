// script.js

// Get the search input element
const searchInput = document.querySelector('input[type="text"]');
const cards = document.querySelectorAll('.card');

// Listen for input event on the search input
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.trim().toLowerCase(); // Get the search term

  // Filter the cards based on the search term
  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
