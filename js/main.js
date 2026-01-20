/**
 * AU PETIT CHEZ SOI - Main JavaScript
 * Animations, interactions et comportements dynamiques
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==================== NAVIGATION ====================
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Cache scroll state to avoid repeated reads
    let lastScrollY = 0;
    let ticking = false;

    // Navigation scroll effect - optimized with RAF
    const handleNavScroll = () => {
        if (lastScrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        ticking = false;
    };

    const onScroll = () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            requestAnimationFrame(handleNavScroll);
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    lastScrollY = window.scrollY;
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

    // Use IntersectionObserver exclusively for reveal - no getBoundingClientRect in scroll handler
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '-50px',
            threshold: 0.1
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback for old browsers - reveal all immediately
        revealElements.forEach(element => {
            element.classList.add('revealed');
        });
    }

    // ==================== STICKY CTA MOBILE ====================
    const stickyCta = document.getElementById('stickyCta');
    const hero = document.getElementById('hero');

    // Use IntersectionObserver for sticky CTA - no getBoundingClientRect in scroll
    if (stickyCta && hero && 'IntersectionObserver' in window) {
        const stickyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // When hero is NOT intersecting (scrolled past), show CTA
                if (!entry.isIntersecting) {
                    stickyCta.classList.add('visible');
                } else {
                    stickyCta.classList.remove('visible');
                }
            });
        }, { threshold: 0 });

        stickyObserver.observe(hero);
    }

    // ==================== SMOOTH SCROLL ====================
    // Cache nav height once - it rarely changes
    let cachedNavHeight = nav ? nav.offsetHeight : 0;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                // Read layout only when clicking, not on scroll
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - cachedNavHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== GALLERY HOVER EFFECT ====================
    // Use CSS for this instead of JS where possible, but keep for compatibility
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const img = item.querySelector('img');
            if (img) img.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', () => {
            const img = item.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
        });
    });

    // ==================== PARALLAX EFFECT (subtle) ====================
    const heroOverlay = document.querySelector('.hero__overlay');

    if (heroOverlay) {
        let parallaxTicking = false;

        const updateParallax = () => {
            heroOverlay.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
            parallaxTicking = false;
        };

        window.addEventListener('scroll', () => {
            if (!parallaxTicking) {
                requestAnimationFrame(updateParallax);
                parallaxTicking = true;
            }
        }, { passive: true });
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

    // Removed duplicate IntersectionObserver code - already implemented above

    // ==================== MOBILE DISH CAROUSEL ====================
    const prevBtn = document.querySelector('.section-header__btn[aria-label="Précédent"]');
    const nextBtn = document.querySelector('.section-header__btn[aria-label="Suivant"]');
    const dishesContainer = document.querySelector('.dishes__grid');

    if (prevBtn && nextBtn && dishesContainer) {
        const dishes = dishesContainer.querySelectorAll('.dish-card');
        let currentIndex = 0;
        let resizeTimeout;

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

        // Initialize and listen for resize with debounce
        initCarousel();
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(initCarousel, 100);
        }, { passive: true });

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
