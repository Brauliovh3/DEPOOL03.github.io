

document.addEventListener('DOMContentLoaded', () => {
    
    const rgbGlow = document.querySelector('.rgb-glow');
    if (rgbGlow) {
        setInterval(() => {
            rgbGlow.style.filter = 'drop-shadow(0 0 8px #0fffc3) drop-shadow(0 0 16px #ff00cc)';
            setTimeout(() => {
                rgbGlow.style.filter = 'drop-shadow(0 0 16px #00bfff) drop-shadow(0 0 8px #0fffc3)';
            }, 120);
        }, 1800);
    }

    
    const logo = document.querySelector('.cyber-logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.boxShadow = '0 0 48px #ff00cc, 0 0 24px #0fffc3 inset';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.boxShadow = '';
        });
    }

    
    const buttons = document.querySelectorAll('.cyber-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.boxShadow = '0 0 40px #ff00cc, 0 0 80px #0fffc3 inset';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.boxShadow = '';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.boxShadow = '';
        });
    });
});