const values = document.querySelectorAll('.value');

console.log(values)
values.forEach(value => {
    value.addEventListener('mouseenter', () => animateIn(value));
    value.addEventListener('mouseleave', () => animateOut(value));
});

function animateIn(element) {
    const arrow = element.querySelector('span');
    const valuesContainer = document.querySelector('#values-container');
    const values = document.querySelectorAll('.value');
    values.forEach(value => gsap.to(value, {x: 0, color: '#444'}));
    gsap.to(arrow, {opacity: 1, duration: 0.3});
    gsap.to(element, {x: 20, color: '#000'});
    gsap.to(valuesContainer, {
        backgroundImage: `url(./assets/images/values/${element.dataset.image}.jpg)`,
        backgroundColor: element.dataset.image,
        duration: 0.3
    });
}

function animateOut(element) {
    const arrow = element.querySelector('span');
    const valuesContainer = document.querySelector('#values-container');
    const values = document.querySelectorAll('.value');
    values.forEach(value => gsap.to(value, {x: 0, color: '#000'}));
    gsap.to(arrow, { opacity: 0, duration: 0.3 });
    gsap.to(element, {x: 0, color: '#000'});
}



