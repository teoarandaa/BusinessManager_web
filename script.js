document.addEventListener('DOMContentLoaded', () => {
    const topicButtons = document.querySelectorAll('.topic-button');
    
    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked'); // Para debug
            const wasActive = button.classList.contains('active');
            
            // Cerrar todos los topics
            topicButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Si el botón no estaba activo, activarlo
            if (!wasActive) {
                button.classList.add('active');
            }
        });
    });
});