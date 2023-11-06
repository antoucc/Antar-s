gsap.set('.follower', {xPercent: -50, yPercent: -50});
gsap.set('.cursor', {xPercent: -50, yPercent: -50});


const follow = document.querySelector('.cursor');
const cursor = document.querySelector('.follower');

window.addEventListener('mousemove', e => {
    gsap.to(follow, 0.2, { x: e.clientX, y: e.clientY });
    gsap.to(cursor, 0.9, { x: e.clientX, y: e.clientY});
});