function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(emailInput.value);

    handleValidationResult(emailInput, isValid, 'Please enter a valid email address.');
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordValue = passwordInput.value;

    const hasUppercase = /[A-Z]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);

    const hasSpecialCharacters = /^[a-zA-Z0-9@]+$/.test(passwordValue);

    const isValid = hasUppercase && hasNumber && hasSpecialCharacters;

    handleValidationResult(passwordInput, isValid, 'Password must contain at least one uppercase letter, one number, and only @ as a special character.');
}

function handleValidationResult(inputElement, isValid, errorMessage) {
    const errorSpanId = inputElement.id + '-error';

    const existingErrorSpan = document.getElementById(errorSpanId);
    if (existingErrorSpan) {
        existingErrorSpan.remove();
    }

    if (!isValid) {
        inputElement.classList.add('invalid-input');
        const errorSpan = document.createElement('span');
        errorSpan.id = errorSpanId;
        errorSpan.classList.add('error-message');
        errorSpan.textContent = errorMessage;
        inputElement.parentNode.insertBefore(errorSpan, inputElement.nextSibling);
    } else {
        inputElement.classList.remove('invalid-input');
    }
}
function openEmailClient() {
    const supportEmail = 'support@zentrades.pro';
    const subject = 'Password Reset Request';
    const body = 'Dear Support Team,\n\nI would like to request a password reset for my account. Please assist me with the process.\n\nThank you,\n[Your Name]';

    const mailtoLink = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

function login() {
    alert('Login successful!');
}
