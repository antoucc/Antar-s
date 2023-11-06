animateMain();


function animateMain() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    document.addEventListener("mousemove", (event) => {
        this.shadowRoot.querySelectorAll(".mousemove").forEach((shift) => {
            const position = shift.getAttribute("data-value");
            const x = (centerX - event.clientX) * position / 250;
            const y = (centerY - event.clientY) * position / 250;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });
}

