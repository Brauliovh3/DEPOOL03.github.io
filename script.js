

// Slider de imágenes
const sliderImages = [
    'https://images.unsplash.com/photo-1518611012118-696072aa579a',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1519864600265-abb23847ef2c',
    'https://images.unsplash.com/photo-1464983953574-0892a716854b'
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