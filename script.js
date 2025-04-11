// Smooth scroll functionality for navigation links
<script src="script.js"></script>
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80, // 80px offset to account for nav bar
            behavior: 'smooth'
        });
    });
});

// Filter function for categories
function filterProjects(category) {
    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block'; // Show all projects
        } else {
            if (project.classList.contains(category)) {
                project.style.display = 'block'; // Show only matching category
            } else {
                project.style.display = 'none'; // Hide non-matching categories
            }
        }
    });
}
