

// Slider de imágenes
const sliderImages = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1549476464-37392f717541?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1434596922112-19c563067271?w=800&h=600&fit=crop'
];
let currentImg = 0;
const slideImg = document.getElementById('slide-img');
document.getElementById('prev-btn').onclick = function() {
    currentImg = (currentImg - 1 + sliderImages.length) % sliderImages.length;
    slideImg.src = sliderImages[currentImg];
};
document.getElementById('next-btn').onclick = function() {
    currentImg = (currentImg + 1) % sliderImages.length;
    slideImg.src = sliderImages[currentImg];
};

// Formulario contacto
document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensaje-exito').style.display = 'block';
    this.reset();
});