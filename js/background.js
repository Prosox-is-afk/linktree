// === Fond animé : étoiles galactiques ===

const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

let width, height;
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const stars = Array.from({ length: 150 }, () => createStar());

function createStar() {
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
    };
}

function drawStars() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#fff";

    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        star.y += star.speed;
        if (star.y > height) {
            star.x = Math.random() * width;
            star.y = 0;
        }
    }
}

function animate() {
    drawStars();
    requestAnimationFrame(animate);
}

animate();
