// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    var fadeOverlay = document.getElementById('fade-overlay');
    fadeOverlay.style.opacity = 0;
    setTimeout(function() {
        fadeOverlay.style.display = 'none';
    }, 4000); // 4000ms = 4 seconds
});
