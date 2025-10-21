// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// CTA button smooth scroll
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector('#works');
    const offsetTop = targetSection.offsetTop - 80;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 25, 41, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 25, 41, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe about section
const aboutText = document.querySelector('.about-text');
if (aboutText) {
    aboutText.style.opacity = '0';
    aboutText.style.transform = 'translateY(100px)';
    aboutText.style.transition = 'opacity 1s ease, transform 1s ease';
    observer.observe(aboutText);
}

// Observe skill tags
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(50px)';
    tag.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    observer.observe(tag);
});

// Observe gallery items
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(100px)';
    item.style.transition = `opacity 1s ease ${index * 0.15}s, transform 1s ease ${index * 0.15}s`;
    observer.observe(item);
});

// Observe section titles
document.querySelectorAll('.section-title').forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(50px)';
    title.style.transition = 'opacity 1s ease, transform 1s ease';
    observer.observe(title);
});

// Observe section subtitles
document.querySelectorAll('.section-subtitle').forEach(subtitle => {
    subtitle.style.opacity = '0';
    subtitle.style.transform = 'translateY(30px)';
    subtitle.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
    observer.observe(subtitle);
});

// Observe contact form groups
document.querySelectorAll('.contact-form .form-group').forEach((group, index) => {
    group.style.opacity = '0';
    group.style.transform = 'translateX(-50px)';
    group.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    observer.observe(group);
});

// Observe submit button
const submitBtn = document.querySelector('.submit-btn');
if (submitBtn) {
    submitBtn.style.opacity = '0';
    submitBtn.style.transform = 'translateY(30px)';
    submitBtn.style.transition = 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s';
    observer.observe(submitBtn);
}

// Observe contact items
document.querySelectorAll('.contact-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(50px)';
    item.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
    observer.observe(item);
});

// Gallery hover effect enhancement
document.querySelectorAll('.gallery-item').forEach(item => {
    const overlay = item.querySelector('.gallery-overlay');
    
    item.addEventListener('mouseenter', function() {
        if (overlay) {
            overlay.style.background = 'linear-gradient(180deg, rgba(25, 118, 210, 0.3) 0%, rgba(0, 0, 0, 0.9) 100%)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        if (overlay) {
            overlay.style.background = 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%)';
        }
    });
});

// Carousel functionality
const carousel = {
    track: document.querySelector('.carousel-track'),
    slides: document.querySelectorAll('.carousel-slide'),
    prevBtn: document.querySelector('.carousel-prev'),
    nextBtn: document.querySelector('.carousel-next'),
    indicators: document.querySelectorAll('.indicator'),
    currentIndex: 0,
    
    init() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goTo(index));
        });
        
        // Auto-play
        setInterval(() => this.next(), 5000);
    },
    
    updateCarousel() {
        const slideWidth = this.slides[0].offsetWidth;
        this.track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        this.track.style.transform = `translateX(-${slideWidth * this.currentIndex}px)`;
        
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // Update active slide
        this.slides.forEach((slide, index) => {
            if (index === this.currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    },
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateCarousel();
    },
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateCarousel();
    },
    
    goTo(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }
};

// Initialize carousel
carousel.init();

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Animate button
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    const originalBg = submitBtn.style.background;
    
    submitBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        submitBtn.style.transform = 'scale(1)';
    }, 100);
    
    submitBtn.textContent = 'Sending...';
    
    // Simulate sending (in a real app, you'd send to a server)
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #4caf50, #8bc34a)';
        
        // Reset form
        setTimeout(() => {
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = originalBg || 'linear-gradient(135deg, var(--accent-blue), var(--light-blue))';
        }, 2000);
    }, 1500);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
    
    if (scrollIndicator) {
        scrollIndicator.style.opacity = 1 - (scrolled / 300);
    }
});

// Add floating animation to gallery items using CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(20px); }
    }
    .gallery-item {
        animation: float 3s ease-in-out infinite;
    }
    .gallery-item:nth-child(2) { animation-delay: 0.2s; }
    .gallery-item:nth-child(3) { animation-delay: 0.4s; }
    .gallery-item:nth-child(4) { animation-delay: 0.6s; }
    .gallery-item:nth-child(5) { animation-delay: 0.8s; }
    .gallery-item:nth-child(6) { animation-delay: 1s; }
`;
document.head.appendChild(style);

// Mouse move effect for hero section
document.querySelector('.hero-section').addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;
    
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.transition = 'transform 0.5s ease-out';
        heroTitle.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }
});

// Resize handler for carousel
window.addEventListener('resize', () => {
    carousel.updateCarousel();
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize body opacity
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

console.log('Portfolio website initialized successfully!');
