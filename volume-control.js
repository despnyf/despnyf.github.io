document.addEventListener("DOMContentLoaded", function() {
    var fadeOverlay = document.getElementById('fade-overlay');
    fadeOverlay.style.opacity = 0;
    setTimeout(function() {
        fadeOverlay.style.display = 'none';
    }, 4000); // 4000ms = 4 seconds

    var audio = document.getElementById('background-audio');
    audio.volume = 1.0; // Volumen al 100%

    setTimeout(function() {
        audio.volume = 0.4; // Cambia al 40% después de 5 segundos
    }, 5000); // 5000ms = 5 seconds
});