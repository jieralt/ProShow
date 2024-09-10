document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.category-btn');
    const workCards = document.querySelectorAll('.work-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            workCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});