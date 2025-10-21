// GSAP Initialization
gsap.registerPlugin(ScrollTrigger);

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

// GSAP Scroll Animations

// About section animation
gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power3.out'
});

// Skills animation
gsap.from('.skill-tag', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out'
});

// Gallery items animation
gsap.from('.gallery-item', {
    scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 100,
    stagger: 0.15,
    duration: 1,
    ease: 'power3.out'
});

// Section titles animation
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
});

// Section subtitles animation
gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
    gsap.from(subtitle, {
        scrollTrigger: {
            trigger: subtitle,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });
});

// Contact form animation
gsap.from('.contact-form .form-group', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -50,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out'
});

gsap.from('.submit-btn', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.5,
    ease: 'power3.out'
});

// Contact info animation
gsap.from('.contact-item', {
    scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out'
});

// Gallery hover effect enhancement with GSAP
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        gsap.to(this.querySelector('.gallery-overlay'), {
            background: 'linear-gradient(180deg, rgba(25, 118, 210, 0.3) 0%, rgba(0, 0, 0, 0.9) 100%)',
            duration: 0.4
        });
    });
    
    item.addEventListener('mouseleave', function() {
        gsap.to(this.querySelector('.gallery-overlay'), {
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
            duration: 0.4
        });
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
        gsap.to(this.track, {
            x: -slideWidth * this.currentIndex,
            duration: 0.8,
            ease: 'power3.inOut'
        });
        
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
                gsap.to(indicator, {
                    scale: 1.2,
                    duration: 0.3
                });
            } else {
                indicator.classList.remove('active');
                gsap.to(indicator, {
                    scale: 1,
                    duration: 0.3
                });
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
    
    gsap.to(submitBtn, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    
    submitBtn.textContent = 'Sending...';
    
    // Simulate sending (in a real app, you'd send to a server)
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #4caf50, #8bc34a)';
        
        // Reset form
        setTimeout(() => {
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, var(--accent-blue), var(--light-blue))';
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

// Add floating animation to gallery items
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    gsap.to(item, {
        y: '+=20',
        duration: 2 + (index * 0.1),
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.2
    });
});

// Mouse move effect for hero section
document.querySelector('.hero-section').addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;
    
    gsap.to('.hero-title', {
        x: xPos,
        y: yPos,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Resize handler for carousel
window.addEventListener('resize', () => {
    carousel.updateCarousel();
});

// Add reveal animation on page load
window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5
    });
});

// Initialize body opacity
document.body.style.opacity = 0;

console.log('Portfolio website initialized successfully!');
