document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las tarjetas
    const cards = document.querySelectorAll('.card');

    // Agregar evento de mouseover a cada tarjeta
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            // Usar anime.js para la animación
            anime({
                targets: this,
                translateY: '-3.4%',
                boxShadow: '5px 5px 20px rgba(0,0,0,0.4)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseout', function() {
            // Usar anime.js para la animación
            anime({
                targets: this,
                translateY: '0',
                boxShadow: '0px 1px 10px rgba(0,0,0,0.2)',
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
});