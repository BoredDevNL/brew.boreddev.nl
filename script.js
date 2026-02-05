document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observeElements = document.querySelectorAll('.feature-card, .tech-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

observeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

const text = "BrewOS";
const typewriterElement = document.getElementById('typewriter');
const cursorElement = document.querySelector('.cursor');
let i = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeWriter() {
    if (!isDeleting && i <= text.length) {
        typewriterElement.textContent = text.substring(0, i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && i >= 0) {
        typewriterElement.textContent = text.substring(0, i);
        i--;
        setTimeout(typeWriter, typingSpeed / 2);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            i = 0;
            setTimeout(typeWriter, 5000);
        } else {
            i = text.length;
            setTimeout(typeWriter, 2000);
        }
    }
}

window.addEventListener('load', function() {
    setTimeout(typeWriter, 1000);
});

document.querySelectorAll('.code-block').forEach(block => {
    block.addEventListener('mouseover', function() {
        this.style.borderColor = 'var(--primary)';
    });
    
    block.addEventListener('mouseout', function() {
        this.style.borderColor = '#3A404C';
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header"); 
    if (header) {
      const scrollIndicator = document.createElement("div");
      scrollIndicator.className = "scroll-indicator";
      scrollIndicator.innerHTML = `
        <div class="text">Scroll Down</div>
        <div class="icon"></div>
      `;
      header.appendChild(scrollIndicator);
    }
  });