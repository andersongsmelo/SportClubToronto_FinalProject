document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value.trim();
    const errorDiv = document.getElementById('error-message');

    let errors = [];

    if (fullName === '') {
        errors.push('Full Name is required.');
    }

    if (email === '') {
        errors.push('Email is required.');
    } else if (!email.includes('@') || !email.includes('.')) {
        errors.push('Please enter a valid email address.');
    }

    if (interest === '') {
        errors.push('Please select what you are interested in.');
    }

    if (message.length < 10) {
        errors.push('Message must be at least 10 characters long.');
    }

    if (errors.length > 0) {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = errors.join('<br>');
    } else {
        errorDiv.style.display = 'none';
        alert('Thank you! Your registration/message has been successfully submitted.');
        this.reset();
    }
});