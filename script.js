document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling to sections
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').includes('.html')) return;
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            el.classList.add('active');
        }
    });
});
function showAboutSection() {
    const aboutSection = document.getElementById("about-section");
    const profilePicture = document.querySelector(".profile-picture");
    
    // Display the about section
    aboutSection.style.display = "block";
    
    // Add animation class to the profile picture
    profilePicture.classList.add("active");
}
