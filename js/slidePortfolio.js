document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const images = document.querySelectorAll('.responsive-image');
    let currentIndex = 0;

    // Função para exibir a imagem atual
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    // Evento para botão "Next"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Avança e reinicia no começo
        showImage(currentIndex);
    });

    // Evento para botão "Prev"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Retrocede e reinicia no final
        showImage(currentIndex);
    });

    // Exibe a imagem inicial
    showImage(currentIndex);
});
