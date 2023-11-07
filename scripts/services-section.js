const values = document.querySelectorAll('.value');
const valuesContainer = document.querySelector('#values-container');
const valuesArray = Array.from(values);

function animateIn(element) {
    const arrow = element.querySelector('span');
    gsap.to(valuesArray, {x: 0, color: '#444'});
    gsap.to(arrow, {opacity: 1, duration: 0.3});
    gsap.to(element, {x: 20, color: '#000'});
    gsap.to(valuesContainer, {
        backgroundImage: `url(./assets/images/values/${element.dataset.image}.jpg)`,
        backgroundColor: element.dataset.color,
        duration: 0.3
    });
}

function animateOut(element) {
    const arrow = element.querySelector('span');
    gsap.to(valuesArray, {x: 0, color: '#000'});
    gsap.to(arrow, {opacity: 0, duration: 0.3});
    gsap.to(element, {x: 0, color: '#000'});
}

valuesContainer.addEventListener('mouseenter', event => {
    if (event.target.classList.contains('value')) {
        animateIn(event.target);
    }
}, true);

valuesContainer.addEventListener('mouseleave', event => {
    if (event.target.classList.contains('value')) {
        animateOut(event.target);
    }
}, true);

