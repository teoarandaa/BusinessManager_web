document.addEventListener('DOMContentLoaded', () => {
    // Para los topic buttons en support.html
    const topicButtons = document.querySelectorAll('.topic-button');
    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
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

    // Para los faq buttons en faqs.html
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const wasActive = button.classList.contains('active');
            
            // Cerrar todas las FAQs
            faqButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Si el botón no estaba activo, activarlo
            if (!wasActive) {
                button.classList.add('active');
            }
        });
    });
});