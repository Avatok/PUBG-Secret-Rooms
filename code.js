        // Smooth scrolling for navbar links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Initialize all carousels
        var carousels = document.querySelectorAll('.carousel');
        carousels.forEach(function(carousel) {
            new bootstrap.Carousel(carousel, {
                interval: 6000,
                pause: 'hover',
                wrap: true
            });
        });

        // Navbar background change on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
                navbar.style.padding = '8px 0';
            } else {
                navbar.style.backgroundColor = 'var(--darker-bg)';
                navbar.style.padding = '10px 0';
            }
        });