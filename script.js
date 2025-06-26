window.onload = () => {
  // --- Floating stickers animation ---
  const section = document.getElementById('home');
  const stickers = document.querySelectorAll('#home .sticker');

  section.style.position = 'relative'; // Make sure section is relative

  // Generate random position within section bounds for a sticker
  function randomPosition(sticker) {
    const maxX = section.clientWidth - sticker.offsetWidth;
    const maxY = section.clientHeight - sticker.offsetHeight;
    return {
      x: Math.random() * maxX,
      y: Math.random() * maxY
    };
  }

  // Animate sticker to a new random position with smooth transition
  function animateSticker(sticker) {
    const pos = randomPosition(sticker);

    sticker.style.transition = 'transform 4s ease-in-out';
    sticker.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

    setTimeout(() => animateSticker(sticker), 4000);
  }

  // Initialize stickers position and start animation
  stickers.forEach(sticker => {
    sticker.style.position = 'absolute';
    const startPos = randomPosition(sticker);
    sticker.style.transform = `translate(${startPos.x}px, ${startPos.y}px)`;
    animateSticker(sticker);
  });

  // --- Smooth scroll functionality for navigation links ---
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // offset for navbar
          behavior: 'smooth'
        });
      }
    });
  });
};

// --- Filter function for project categories ---
function filterProjects(category) {
  const allProjects = document.querySelectorAll('.project');
  allProjects.forEach(project => {
    if (category === 'all') {
      project.style.display = 'block';
    } else {
      if (project.classList.contains(category)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    }
  });
}

