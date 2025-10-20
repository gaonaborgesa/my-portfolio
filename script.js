// Slideshow 
let currentSlideIndex = 0, slides, dots, autoAdvanceTimer, touchStartX = 0;

// Main functions
const showSlide = (index) => {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index]?.classList.add('active');
    dots[index]?.classList.add('active');
};

const changeSlide = (direction, resetTimer = true) => {
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    showSlide(currentSlideIndex);
    resetTimer && restartAutoAdvance();
};

const currentSlide = (index) => {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
    restartAutoAdvance();
};

const restartAutoAdvance = () => {
    clearInterval(autoAdvanceTimer);
    autoAdvanceTimer = setInterval(() => changeSlide(1, false), 5000);
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    slides = document.querySelectorAll('.slide');
    
    // Generate dots
    const dotsContainer = document.querySelector('.slide-dots');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = i === 0 ? 'dot active' : 'dot';
            dot.onclick = () => currentSlide(i + 1);
            dotsContainer.appendChild(dot);
        });
    }
    
    dots = document.querySelectorAll('.dot');
    showSlide(0);
    restartAutoAdvance();
    
    // Event listeners
    document.addEventListener('keydown', e => e.key.includes('Arrow') && changeSlide(e.key === 'ArrowRight' ? 1 : -1));
    
    const container = document.querySelector('.slideshow-container');
    if (container) {
        container.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
        container.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            Math.abs(diff) > 50 && changeSlide(diff > 0 ? 1 : -1);
        });
    }
});

