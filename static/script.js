// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Set minimum date for booking form
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Handle booking form submission
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            
            // Hide form and show success message
            document.getElementById('bookingForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('confirmEmail').textContent = email;
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide form and show success message
            document.getElementById('contactFormSection').style.display = 'none';
            document.getElementById('contactSuccess').style.display = 'block';
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Reset booking form
function resetForm() {
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('bookingForm').style.display = 'block';
    document.getElementById('appointmentForm').reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reset contact form
function resetContactForm() {
    document.getElementById('contactSuccess').style.display = 'none';
    document.getElementById('contactFormSection').style.display = 'block';
    document.getElementById('contactForm').reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
