gsap.set('.follower', {xPercent: -50, yPercent: -50});
gsap.set('.cursor', {xPercent: -50, yPercent: -50});


const follow = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
    gsap.to(follow, 0.4, { x: e.clientX, y: e.clientY });
});