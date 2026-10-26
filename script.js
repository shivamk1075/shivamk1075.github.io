// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Add a simple scroll effect to change navbar background opacity
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(13, 17, 23, 1)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.backgroundColor = 'rgba(13, 17, 23, 0.95)';
        nav.style.boxShadow = 'none';
    }
});
