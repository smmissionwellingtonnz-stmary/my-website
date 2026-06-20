// includes/menu.js
// Left Hamburger Menu Navigation - Complete Functionality

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Wait a bit for notice bar to load
    setTimeout(function() {
        initializeMenu();
    }, 100);
});

function initializeMenu() {
    // Create menu HTML structure (side menu and overlay)
    createMenuStructure();
    
    // Set up event listeners after menu is injected
    setTimeout(() => {
        setupMenuEventListeners();
        highlightCurrentPage();
    }, 50);
}

function createMenuStructure() {
    // Check if menu already exists
    if (document.querySelector('.side-menu')) return;
    
    // Create overlay and side menu (hamburger button is in notice.html)
    const menuHTML = `
        <div class="menu-overlay" id="menuOverlay"></div>
        <div class="side-menu" id="sideMenu">
            <div class="menu-header">
                <button class="menu-close-btn" id="menuCloseBtn">
                    <i class="fas fa-times"></i>
                </button>
                <div class="menu-logo">
                    <img src="images/logo.png" alt="Logo" class="menu-logo-img" onerror="this.src='https://via.placeholder.com/50'">
                    <div class="menu-logo-text">
                        St. Mary's<br>
                        <small>Syro-Malabar Mission</small>
                    </div>
                </div>
                <div class="menu-header-desc">
                    <i class="fas fa-church"></i> Wellington, New Zealand
                </div>
            </div>
            
            <ul class="nav-menu-list" id="navMenuList">
                <li class="nav-item">
                    <a href="index.html" class="nav-link">
                        <div class="nav-link-left">
                            <i class="fas fa-home"></i>
                            <span>Home</span>
                        </div>
                    </a>
                </li>
                
                <li class="nav-item">
                    <a href="#" class="nav-link has-dropdown">
                        <div class="nav-link-left">
                            <i class="fas fa-church"></i>
                            <span>About</span>
                        </div>
                        <span class="chevron"><i class="fas fa-chevron-down"></i></span>
                    </a>
                    <div class="dropdown-menu">
                        <a href="aboutsyromalabarchurch.html" class="dropdown-item">
                            <i class="fas fa-cross"></i> Syro-Malabar Church
                        </a>
                        <a href="abouteparchy.html" class="dropdown-item">
                            <i class="fas fa-map-marker-alt"></i> Syro-Malabar Melbourne
                        </a>
                        <a href="aboutsmmission.html" class="dropdown-item">
                            <i class="fas fa-flag"></i> Syro-Malabar Wellington
                        </a>
                        <a href="priestandcouncil.html" class="dropdown-item">
                            <i class="fas fa-user-priest"></i> Priest & Council
                        </a>
                    </div>
                </li>
                
                <li class="nav-item">
                    <a href="#" class="nav-link has-dropdown">
                        <div class="nav-link-left">
                            <i class="fas fa-calendar-alt"></i>
                            <span>Services</span>
                        </div>
                        <span class="chevron"><i class="fas fa-chevron-down"></i></span>
                    </a>
                    <div class="dropdown-menu">
                        <a href="services.html" class="dropdown-item">
                            <i class="fas fa-clock"></i> Holy Qurbana Schedule
                        </a>
                        <a href="event.html" class="dropdown-item">
                            <i class="fas fa-calendar-week"></i> Upcoming Programs
                        </a>
                    </div>
                </li>
                
                <li class="nav-item">
                    <a href="ministries.html" class="nav-link">
                        <div class="nav-link-left">
                            <i class="fas fa-hands-helping"></i>
                            <span>Ministries</span>
                        </div>
                    </a>
                </li>
                
                <li class="nav-item">
                    <a href="forms.html" class="nav-link">
                        <div class="nav-link-left">
                            <i class="fas fa-file-alt"></i>
                            <span>Forms</span>
                        </div>
                    </a>
                </li>
                
                <li class="nav-item">
                    <a href="resources.html" class="nav-link">
                        <div class="nav-link-left">
                            <i class="fas fa-book"></i>
                            <span>Resources</span>
                        </div>
                    </a>
                </li>
                
                <li class="nav-item">
                    <a href="safeguard.html" class="nav-link">
                        <div class="nav-link-left">
                            <i class="fas fa-shield-alt"></i>
                            <span>Safeguarding</span>
                        </div>
                    </a>
                </li>
                
                <li class="nav-item">
                    <a href="community-outreach.html.html" class="nav-link">
                        <div class="nav-link-left">
                            <i class="fas fa-hand-holding-heart"></i>
                            <span>Community Outreach</span>
                        </div>
                    </a>
                </li>
                
                <li class="nav-item">
                    <a href="gallery.html" class="nav-link">
                        <div class="nav-link-left">
                            <i class="fas fa-images"></i>
                            <span>Gallery</span>
                        </div>
                    </a>
                </li>
                
                <li class="nav-item">
                    <a href="contact.html" class="nav-link">
                        <div class="nav-link-left">
                            <i class="fas fa-envelope"></i>
                            <span>Connect Us</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
    <a href="SeedsOfHope.html" class="nav-link seeds-of-hope">
        <div class="nav-link-left">
            <i class="fas fa-seedling"></i>
            <span>Seeds of Hope</span>
        </div>
    </a>
</li>      
                <li class="nav-item">
                    <a href="Newsletter/newsletter.jpg" class="nav-link newsletter" download>
                        <div class="default-text">
                            <i class="fas fa-newspaper"></i>
                            <span>Newsletter</span>
                        </div>
                        <div class="hover-text">
                            <i class="fas fa-download"></i> Download latest newsletter
                        </div>
                    </a>
                </li>
                
               <li class="nav-item">
    <a href="https://buy.stripe.com/eVq7sM5Ao1W41ckatb5Vu00" class="nav-link donate" target="_blank">
        <div class="nav-link-left">
            <i class="fas fa-heart"></i>
            <span>DONATE NOW</span>
        </div>
    </a>
</li>
            </ul>
            
            <div class="menu-footer">
                <div class="social-links">
                    <a href="https://www.facebook.com/profile.php?id=61559070310419" target="_blank" class="social-link" rel="noopener noreferrer">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/smmissionwellington/?next=%2F" target="_blank" class="social-link" rel="noopener noreferrer">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCcM4Eniz3bBUuKlt3olO1Ow" target="_blank" class="social-link" rel="noopener noreferrer">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/messages/t/331100746743772" target="_blank" class="social-link" rel="noopener noreferrer">
                        <i class="fab fa-facebook-messenger"></i>
                    </a>
                </div>
                <div class="menu-copyright">
                    © 2024 St. Mary's Syro-Malabar Mission<br>
                    Wellington, New Zealand
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', menuHTML);
}

function setupMenuEventListeners() {
    // Get hamburger button from notice bar
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sideMenu = document.getElementById('sideMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuCloseBtn = document.getElementById('menuCloseBtn');
    
    // Debug logging
    console.log("Setting up menu listeners...");
    console.log("Hamburger button found:", !!hamburgerBtn);
    console.log("Side menu found:", !!sideMenu);
    
    if (!hamburgerBtn || !sideMenu || !menuOverlay) {
        console.log("Menu elements not found, retrying in 500ms...");
        // Retry after a short delay
        setTimeout(setupMenuEventListeners, 500);
        return;
    }
    
    // Remove any existing listeners by cloning and replacing
    const newHamburgerBtn = hamburgerBtn.cloneNode(true);
    hamburgerBtn.parentNode.replaceChild(newHamburgerBtn, hamburgerBtn);
    const finalHamburgerBtn = document.getElementById('hamburgerBtn');
    
    // Toggle menu function
    function toggleMenu() {
        const isOpen = sideMenu.classList.contains('active');
        console.log("Toggling menu, currently open:", isOpen);
        
        if (isOpen) {
            // Close menu
            sideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            finalHamburgerBtn.classList.remove('open');
            document.body.classList.remove('menu-open');
        } else {
            // Open menu
            sideMenu.classList.add('active');
            menuOverlay.classList.add('active');
            finalHamburgerBtn.classList.add('open');
            document.body.classList.add('menu-open');
        }
    }
    
    // Hamburger button click
    finalHamburgerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Hamburger clicked!");
        toggleMenu();
    });
    
    // Menu close button click (X button on right side inside menu)
    const finalMenuCloseBtn = document.getElementById('menuCloseBtn');
    if (finalMenuCloseBtn) {
        finalMenuCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("Close button clicked!");
            if (sideMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    }
    
    // Overlay click to close
    const finalMenuOverlay = document.getElementById('menuOverlay');
    if (finalMenuOverlay) {
        finalMenuOverlay.addEventListener('click', () => {
            console.log("Overlay clicked!");
            if (sideMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    }
    
    // Close menu when escape key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            console.log("Escape key pressed!");
            toggleMenu();
        }
    });
    
    // Dropdown functionality
    const dropdownParents = document.querySelectorAll('.nav-link.has-dropdown');
    
    dropdownParents.forEach(parent => {
        // Remove existing listener to avoid duplicates
        const newParent = parent.cloneNode(true);
        parent.parentNode.replaceChild(newParent, parent);
        
        newParent.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const dropdownMenu = newParent.nextElementSibling;
            const chevron = newParent.querySelector('.chevron');
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu !== dropdownMenu && menu.classList.contains('show')) {
                    menu.classList.remove('show');
                    const prevParent = menu.previousElementSibling;
                    if (prevParent) {
                        const prevChevron = prevParent.querySelector('.chevron');
                        if (prevChevron) prevChevron.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            // Toggle current dropdown
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('show');
                if (chevron) {
                    const isOpen = dropdownMenu.classList.contains('show');
                    chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            }
        });
    });
    
    // Close menu when clicking on a link (except dropdown toggles)
    const allLinks = document.querySelectorAll('.nav-link:not(.has-dropdown), .dropdown-item');
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sideMenu.classList.contains('active')) {
                setTimeout(() => {
                    toggleMenu();
                }, 150);
            }
        });
    });
    
    // Handle window resize - close menu if open and window becomes larger
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768 && sideMenu.classList.contains('active')) {
                toggleMenu();
            }
        }, 250);
    });
    
    console.log("Menu listeners setup complete!");
}

function highlightCurrentPage() {
    // Get current page filename
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Find and highlight matching links
    const allLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === '/' && href === 'index.html')) {
            link.classList.add('active');
            
            // If it's a dropdown item, open the parent dropdown
            if (link.classList.contains('dropdown-item')) {
                const parentDropdown = link.closest('.dropdown-menu');
                if (parentDropdown) {
                    parentDropdown.classList.add('show');
                    const parentLink = parentDropdown.previousElementSibling;
                    if (parentLink && parentLink.classList.contains('has-dropdown')) {
                        const chevron = parentLink.querySelector('.chevron');
                        if (chevron) chevron.style.transform = 'rotate(180deg)';
                    }
                }
            }
        }
    });
}

// Export for debugging (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeMenu };
}
