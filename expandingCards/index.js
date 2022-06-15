const cards = document.querySelectorAll('.card');

function removeActiveClass(cards) {
  const activeCard = Array.from(cards).find(card => card.classList.contains('card_active'));
  activeCard.classList.remove('card_active');
}

cards.forEach(card => {
  card.addEventListener('click', () => {
    removeActiveClass(cards);
    card.classList.add('card_active');
  })
})
