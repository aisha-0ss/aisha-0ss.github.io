document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });

    // Filter function
    window.filterProjects = function (category) {
        const allProjects = document.querySelectorAll(".project");
        allProjects.forEach(project => {
            if (category === "all") {
                project.style.display = "block";
            } else {
                if (project.classList.contains(category)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            }
        });
    };
});

