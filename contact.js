function submitForm() {
    // Get form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Alert box to confirm submission
    alert(`Thank you, ${name}! Your message has been submitted successfully.\nEmail: ${email}\nMessage: ${message}`);
    
    // Reset the form after submission
    document.getElementById("contactForm").reset();

    return false; // Prevent form from refreshing the page (for demo purposes)
}
