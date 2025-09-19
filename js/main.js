// Main JavaScript file for Nada Refaat's Portfolio - White and Red Theme
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all animations and interactions
    initSmoothScrolling();
    initScrollAnimations();
    initHoverEffects();
    initTypingEffect();
    initImageLoading();
    initTestimonialRotation();
    initAchievementAnimations();
    initContactAnimations();
    initProjectCards();
    initScrollToTop();
    initParallaxEffect();
    
    // Console welcome message with white and red theme
    console.log('%c👋 Hey there! Welcome to Nada Refaat\'s Portfolio', 'color: #dc2626; font-size: 16px; font-weight: bold;');
    console.log('%cLooking for a talented video editor? You\'ve come to the right place!', 'color: #ef4444; font-size: 14px;');
});

// Initialize project cards with hover effects only
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Enhanced hover effects with red theme
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 30px 60px rgba(220, 38, 38, 0.25)';
            this.style.borderColor = '#dc2626';
            
            // Animate project image
            const projectImage = this.querySelector('.project-image');
            if (projectImage) {
                projectImage.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 15px 40px rgba(220, 38, 38, 0.08)';
            this.style.borderColor = 'rgba(239, 68, 68, 0.15)';
            
            // Reset project image
            const projectImage = this.querySelector('.project-image');
            if (projectImage) {
                projectImage.style.transform = 'scale(1)';
            }
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
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
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for grid items
                if (entry.target.querySelector('.skills-grid, .projects-grid, .services-grid, .achievements-grid')) {
                    animateGridItems(entry.target);
                }
                
                // Special animation for timeline items
                if (entry.target.querySelector('.education-timeline, .experience-timeline')) {
                    animateTimelineItems(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Animate grid items with staggered effect
function animateGridItems(section) {
    const gridItems = section.querySelectorAll('.skill-category, .project-card, .service-card, .achievement-card');
    gridItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Animate timeline items
function animateTimelineItems(section) {
    const timelineItems = section.querySelectorAll('.education-item, .experience-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }, index * 200);
    });
}

// Initialize hover effects with red theme
function initHoverEffects() {
    // Skill tags hover effects
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(220, 38, 38, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Achievement cards hover effects
    document.querySelectorAll('.achievement-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add a subtle glow effect with red
            this.style.boxShadow = '0 25px 60px rgba(220, 38, 38, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 15px 40px rgba(220, 38, 38, 0.08)';
        });
    });

    // Testimonial cards interactive effects
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const avatar = this.querySelector('.author-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const avatar = this.querySelector('.author-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1) rotate(0deg)';
                avatar.style.transition = 'transform 0.3s ease';
            }
        });
    });
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
}

// Image loading animations
function initImageLoading() {
    document.querySelectorAll('.project-image img, .profile-image img').forEach(img => {
        img.classList.add('loading-image');
        
        const showImage = () => {
            img.classList.add('loaded');
        };
        
        if (img.complete && img.naturalHeight !== 0) {
            showImage();
        } else {
            img.addEventListener('load', showImage);
            img.addEventListener('error', function() {
                this.classList.add('loaded');
            });
        }
    });
}

// Testimonial rotation effect
function initTestimonialRotation() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length > 0) {
        let currentIndex = 0;
        
        // Add initial classes
        testimonials.forEach((testimonial, index) => {
            testimonial.style.opacity = index === 0 ? '1' : '0.7';
            testimonial.style.transform = index === 0 ? 'scale(1)' : 'scale(0.95)';
        });
        
        // Rotate testimonials every 5 seconds
        setInterval(() => {
            testimonials[currentIndex].style.opacity = '0.7';
            testimonials[currentIndex].style.transform = 'scale(0.95)';
            
            currentIndex = (currentIndex + 1) % testimonials.length;
            
            testimonials[currentIndex].style.opacity = '1';
            testimonials[currentIndex].style.transform = 'scale(1)';
            testimonials[currentIndex].style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 5000);
    }
}

// Achievement cards special animations with red theme
function initAchievementAnimations() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        // Add click effect for achievement cards
        card.addEventListener('click', function() {
            // Create a ripple effect with red
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(220, 38, 38, 0.2)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add floating animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'float 3s ease-in-out infinite';
                    }, Math.random() * 1000);
                }
            });
        });
        
        observer.observe(card);
    });
}

// Contact section animations
function initContactAnimations() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Add a subtle click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.2s ease';
            }, 100);
        });
        
        // Add pulse animation on hover
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.icon, img');
            if (icon) {
                icon.style.animation = 'pulse 1s infinite';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.icon, img');
            if (icon) {
                icon.style.animation = 'none';
            }
        });
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Scroll-to-top functionality with Red Theme
function initScrollToTop() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed !important;
        bottom: 30px !important;
        right: 30px !important;
        width: 50px !important;
        height: 50px !important;
        border: none !important;
        border-radius: 50% !important;
        background: linear-gradient(135deg, #dc2626, #ef4444) !important;
        color: white !important;
        font-size: 20px !important;
        font-weight: bold !important;
        cursor: pointer !important;
        opacity: 0 !important;
        transition: all 0.3s ease !important;
        z-index: 10000 !important;
        box-shadow: 0 5px 15px rgba(220, 38, 38, 0.3) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
        } else {
            scrollButton.style.opacity = '0';
        }
    });
    
    // Smooth scroll to top
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects with red theme
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
        scrollButton.style.background = 'linear-gradient(135deg, #f87171, #dc2626)';
        scrollButton.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.4)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
        scrollButton.style.background = 'linear-gradient(135deg, #dc2626, #ef4444)';
        scrollButton.style.boxShadow = '0 5px 15px rgba(220, 38, 38, 0.3)';
    });
}

// Progress bar animation for skills (if you want to add progress bars later)
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const progress = bar.dataset.progress;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = progress + '%';
            bar.style.transition = 'width 2s ease-in-out';
        }, 500);
    });
}

// Add CSS keyframes for animations with red theme
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
    
    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 5px rgba(220, 38, 38, 0.4);
        }
        50% {
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.7);
        }
    }
    
    .project-card {
        transition: all 0.3s ease !important;
    }
    
    .project-image {
        transition: transform 0.3s ease !important;
        overflow: hidden;
    }
    
    /* Force scroll-to-top button styling with red */
    .scroll-to-top {
        background: linear-gradient(135deg, #dc2626, #ef4444) !important;
        box-shadow: 0 5px 15px rgba(220, 38, 38, 0.3) !important;
    }
    
    .scroll-to-top:hover {
        background: linear-gradient(135deg, #f87171, #dc2626) !important;
        box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4) !important;
    }
`;

document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    // Any scroll-heavy operations can be placed here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);