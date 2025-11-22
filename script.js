// Mobile Menu Toggle
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        const reviews = document.querySelectorAll(".review-item");
        let index = 0;

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                navLinks.classList.remove('active'); // Close menu on click
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Review Carousel Functionality
        document.getElementById("nextReview").addEventListener("click", () => {
            reviews[index].classList.remove("active");
            index = (index + 1) % reviews.length;
            reviews[index].classList.add("active");
        });

        document.getElementById("prevReview").addEventListener("click", () => {
            reviews[index].classList.remove("active");
            index = (index - 1 + reviews.length) % reviews.length;
            reviews[index].classList.add("active");
        });