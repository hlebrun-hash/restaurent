/**
 * AU PETIT CHEZ SOI - Main JavaScript
 * Animations, interactions et comportements dynamiques
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==================== NAVIGATION ====================
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Navigation scroll effect
    const handleNavScroll = () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll(); // Check on load

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu on link click
        navMenu.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ==================== REVEAL ON SCROLL ====================
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load

    // ==================== STICKY CTA MOBILE ====================
    const stickyCta = document.getElementById('stickyCta');
    const hero = document.getElementById('hero');

    if (stickyCta && hero) {
        const handleStickyCta = () => {
            const heroBottom = hero.getBoundingClientRect().bottom;

            if (heroBottom < 0) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', handleStickyCta);
        handleStickyCta();
    }

    // ==================== SMOOTH SCROLL ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = nav ? nav.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== GALLERY HOVER EFFECT ====================
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('img')?.style.setProperty('transform', 'scale(1.1)');
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('img')?.style.setProperty('transform', 'scale(1)');
        });
    });

    // ==================== PARALLAX EFFECT (subtle) ====================
    const heroOverlay = document.querySelector('.hero__overlay');

    if (heroOverlay) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    }

    // ==================== CUSTOM CURSOR (optional enhancement) ====================
    // Uncomment below for custom cursor effect on desktop
    /*
    if (window.matchMedia('(pointer: fine)').matches) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }
    */

    // ==================== INTERSECTION OBSERVER FALLBACK ====================
    // For browsers that support it, use IntersectionObserver for better performance
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(element => {
            observer.observe(element);
        });
    }

    // ==================== MOBILE DISH CAROUSEL ====================
    const prevBtn = document.querySelector('.section-header__btn[aria-label="Précédent"]');
    const nextBtn = document.querySelector('.section-header__btn[aria-label="Suivant"]');
    const dishesContainer = document.querySelector('.dishes__grid');

    if (prevBtn && nextBtn && dishesContainer) {
        const dishes = dishesContainer.querySelectorAll('.dish-card');
        let currentIndex = 0;

        // Ensure first item is active initially if on mobile
        const initCarousel = () => {
            if (window.innerWidth < 768) {
                dishes.forEach((dish, index) => {
                    dish.classList.toggle('active', index === currentIndex);
                    // Ensure opacity is reset for reveal animation compatibility
                    if (index === currentIndex) {
                        dish.style.opacity = '1';
                        dish.style.transform = 'translateY(0)';
                    }
                });
            } else {
                // Reset styles for desktop
                dishes.forEach(dish => {
                    dish.classList.remove('active');
                    dish.style.opacity = '';
                    dish.style.transform = '';
                });
            }
        };

        // Initialize and listen for resize
        initCarousel();
        window.addEventListener('resize', initCarousel);

        // Click handlers
        prevBtn.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                currentIndex = (currentIndex - 1 + dishes.length) % dishes.length;
                initCarousel();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                currentIndex = (currentIndex + 1) % dishes.length;
                initCarousel();
            }
        });
    }

    // ==================== MOBILE TESTIMONIALS TOGGLE ====================
    const showMoreTestimonialsBtn = document.getElementById('showMoreTestimonials');
    if (showMoreTestimonialsBtn) {
        showMoreTestimonialsBtn.addEventListener('click', () => {
            const hiddenTestimonials = document.querySelectorAll('.testimonial:nth-child(n+3)');
            hiddenTestimonials.forEach(testimonial => {
                testimonial.classList.add('visible-mobile');
            });
            showMoreTestimonialsBtn.style.display = 'none';
        });
    }

    console.log('✨ Au Petit Chez Soi - Site loaded successfully');
});
