document.querySelectorAll(".link-card").forEach((card) => {
    card.addEventListener("click", () => {
        if (window.navigator.vibrate) {
            navigator.vibrate(30); // vibration de 30ms
        }
    });
});
