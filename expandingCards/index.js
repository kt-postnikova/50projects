const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const activeCard = Array.from(cards).find(card => card.classList.contains('card_active'));
    activeCard.classList.remove('card_active');
    card.classList.add('card_active');
  })
})
