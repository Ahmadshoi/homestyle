function Submit() {
    const email = document.getElementById("email").value;
    const design = document.getElementById("design").value;
    const quantity = document.getElementById("quantity").value;

    // Simple validation checks
    if (!email) {
        alert("Please enter your email.");
        return false;
    }

    if (!design) {
        alert("Please describe the design you need.");
        return false;
    }

    if (!quantity || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return false;
    }

    alert(`Thank you! Your order has been submitted.\nEmail: ${email}\nDesign: ${design}\nQuantity: ${quantity}`);
    
    document.getElementById("orderForm").reset();
    return false;
}
