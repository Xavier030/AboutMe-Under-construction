using Microsoft.AspNetCore.Mvc;

document.addEventListener('DOMContentLoaded', function () {
    // add fade-in animation to section cards
    const cards = document.querySelectorAll('.section-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // enhance print button functionality
    const printBtn = document.getElementById('print-resume');
    if (printBtn) {
        printBtn.addEventListener('click', function () {
            window.print();
        });
    }

    // skill tag click effect
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
