const navbar = document.getElementById("navbar");

// Function to handle scroll event
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

