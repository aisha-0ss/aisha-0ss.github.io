// Subtle flicker scanline effect
<script src="script.js"> </script>
document.body.style.backgroundSize = "100% 2px";
document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)";
document.body.style.backgroundRepeat = "repeat-y";
