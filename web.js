// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Functionality
    initializeMobileMenu();
    
    // Product Category Functionality
    initializeProductCategories();
    
    // Initialize default view
    initializeDefaultView();
});

// Mobile Menu Functions
function initializeMobileMenu() {
    try {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeBtn = document.querySelector('.close-btn');
        const overlay = document.querySelector('.overlay');

        // Verify all elements exist
        if (!menuBtn || !mobileMenu || !closeBtn || !overlay) {
            console.warn('Mobile menu elements not found. Some functionality may be limited.');
            return;
        }

        menuBtn.addEventListener('click', () => toggleMobileMenu(true));
        closeBtn.addEventListener('click', () => toggleMobileMenu(false));
        overlay.addEventListener('click', () => toggleMobileMenu(false));
    } catch (error) {
        console.error('Error initializing mobile menu:', error);
    }
}

function toggleMobileMenu(show) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    
    if (show) {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Product Category Functions
function initializeProductCategories() {
    try {
        // Set up category cards
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.getAttribute('data-category') || 
                                this.getAttribute('onclick').match(/'([^']+)'/)[1];
                showProducts(category);
            });
        });

        // Set up back buttons
        const backButtons = document.querySelectorAll('.back-button');
        backButtons.forEach(btn => {
            btn.addEventListener('click', backToCategories);
        });
    } catch (error) {
        console.error('Error initializing product categories:', error);
    }
}

function showProducts(category) {
    try {
        const categorySelection = document.getElementById('categorySelection');
        const productContainer = document.getElementById(`${category}Products`);

        if (!categorySelection || !productContainer) {
            console.error('Required elements for product display not found');
            return;
        }

        categorySelection.style.display = 'none';
        productContainer.style.display = 'block';
    } catch (error) {
        console.error('Error showing products:', error);
    }
}

function backToCategories() {
    try {
        const categorySelection = document.getElementById('categorySelection');
        const supplements = document.getElementById('supplementsProducts');
        const beverages = document.getElementById('beveragesProducts');

        if (!categorySelection || !supplements || !beverages) {
            console.error('Required elements for category view not found');
            return;
        }

        categorySelection.style.display = 'block';
        supplements.style.display = 'none';
        beverages.style.display = 'none';
    } catch (error) {
        console.error('Error returning to categories:', error);
    }
}

// Initialize Default View
function initializeDefaultView() {
    try {
        const supplements = document.getElementById('supplementsProducts');
        const beverages = document.getElementById('beveragesProducts');

        if (supplements) supplements.style.display = 'none';
        if (beverages) beverages.style.display = 'none';
    } catch (error) {
        console.error('Error initializing default view:', error);
    }
}