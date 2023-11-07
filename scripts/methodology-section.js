const steps = document.querySelectorAll('.step');
const canvas = document.getElementById('line');
const ctx = canvas.getContext('2d');

updateCanvas(document.getElementById('line'), steps);

function updateCanvas(canvas, stepsElements) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#fff';
    ctx.fillStyle = '#fff';
    ctx.lineWidth = 2;

    const lineY = canvas.height / 2;

    // Draw the line
    ctx.beginPath();
    ctx.moveTo(0, lineY);
    ctx.lineTo(canvas.width, lineY);
    ctx.stroke();


    const spacing = canvas.width / (stepsElements.length + 1);

    stepsElements.forEach((step, index) => {
        const dotX = spacing * (index + 1);
        const dotRadius = 5;

        ctx.beginPath();
        ctx.arc(dotX, lineY, dotRadius, 0, Math.PI * 2, true);
        ctx.fill();
    });
}