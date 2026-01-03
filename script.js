// Show alert message when button is clicked
document.getElementById("showMessage").addEventListener("click", function() {
    alert("Hello! You clicked the button.");
});

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if(name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert("Please fill all the fields.");
    }
});

// Change background color on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if(window.scrollY > 50) {
        header.style.backgroundColor = "#005fa3";
    } else {
        header.style.backgroundColor = "#0077cc";
    }
});

// Simple console log for testing JS
console.log("SCM Assignment JavaScript loaded successfully.");
