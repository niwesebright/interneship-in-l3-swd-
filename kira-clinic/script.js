

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MOBILE MENU TOGGLE ==========
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Close menu when clicking a link (mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                if (navMenu) navMenu.classList.remove('show');
            }
        });
    });
    
    // ========== ACTIVE NAVIGATION LINK ==========
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });
    
    // ========== CONTACT FORM HANDLING ==========
    const contactForm = document.getElementById('contactForm');
    const feedbackDiv = document.getElementById('formFeedback');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const fullName = document.getElementById('fullName') ? document.getElementById('fullName').value.trim() : '';
            const email = document.getElementById('emailAddress') ? document.getElementById('emailAddress').value.trim() : '';
            const subject = document.getElementById('subjectLine') ? document.getElementById('subjectLine').value.trim() : '';
            const message = document.getElementById('messageContent') ? document.getElementById('messageContent').value.trim() : '';
            
            // Validation
            if (fullName === '') {
                showFeedback('Please enter your full names', 'error');
                if (document.getElementById('fullName')) document.getElementById('fullName').focus();
                return;
            }
            
            if (email === '') {
                showFeedback('Please enter your email address', 'error');
                if (document.getElementById('emailAddress')) document.getElementById('emailAddress').focus();
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                showFeedback('Please enter a valid email address (example@domain.com)', 'error');
                if (document.getElementById('emailAddress')) document.getElementById('emailAddress').focus();
                return;
            }
            
            if (subject === '') {
                showFeedback('Please enter a subject', 'error');
                if (document.getElementById('subjectLine')) document.getElementById('subjectLine').focus();
                return;
            }
            
            if (message === '') {
                showFeedback('Please write your message', 'error');
                if (document.getElementById('messageContent')) document.getElementById('messageContent').focus();
                return;
            }
            
            // If all good - show success message
            showFeedback('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
            
            // Clear the form
            contactForm.reset();
        });
    }
    
    // Function to show feedback messages
    function showFeedback(message, type) {
        if (feedbackDiv) {
            feedbackDiv.textContent = message;
            feedbackDiv.className = 'form-feedback ' + type;
            
            // Clear message after 5 seconds
            setTimeout(function() {
                feedbackDiv.textContent = '';
                feedbackDiv.className = 'form-feedback';
            }, 5000);
        }
    }
    
    // ========== SMOOTH SCROLLING ==========
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});