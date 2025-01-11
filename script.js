document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');
    const searchClose = document.querySelector('.search-close');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // Funcionalidad del buscador
    searchButton.addEventListener('click', (e) => {
        if (!searchButton.classList.contains('active')) {
            e.preventDefault();
            searchButton.classList.add('active');
            searchInput.focus();
        }
    });

    // Cerrar con el botón X
    searchClose.addEventListener('click', (e) => {
        e.stopPropagation();
        searchButton.classList.remove('active');
    });

    // Cerrar el buscador cuando se hace click fuera
    document.addEventListener('click', (e) => {
        if (!searchButton.contains(e.target)) {
            searchButton.classList.remove('active');
        }
    });

    // Cerrar el buscador con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchButton.classList.remove('active');
        }
    });
}); 