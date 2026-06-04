// includes/menu.js
// Enhanced menu functionality with scroll effects and active page detection

document.addEventListener("DOMContentLoaded", function() {
    // Add scroll effect to navbar
    const navContainer = document.querySelector('.nav-container');
    
    if (navContainer) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navContainer.classList.add('scrolled');
            } else {
                navContainer.classList.remove('scrolled');
            }
        });
    }
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .mobile-dropdown-item');
    
    allNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const mobileMenu = document.getElementById('mobile-menu-container');
            const overlay = document.getElementById('mobile-nav-overlay');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';
                
                // Reset hamburger icon
                const navToggle = document.getElementById('nav-toggle');
                if (navToggle) {
                    const icon = navToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        }
    });
    
    // Prevent body scroll when mobile menu is open
    const observeMobileMenu = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                const mobileMenu = document.getElementById('mobile-menu-container');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }
        });
    });
    
    const mobileMenuElement = document.getElementById('mobile-menu-container');
    if (mobileMenuElement) {
        observeMobileMenu.observe(mobileMenuElement, { attributes: true });
    }
});
