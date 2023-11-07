import {ScrollSmoother} from '/node_modules/gsap-trial/ScrollSmoother.js';

gsap.registerPlugin(ScrollSmoother)

gsap.set('.follower', {xPercent: -50, yPercent: -50});
gsap.set('.cursor', {xPercent: -50, yPercent: -50});


const follow = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {
    gsap.to(follow, 0.3, { x: e.clientX, y: e.clientY });
});

ScrollSmoother.create({
    smooth: 1,
    effects: true,
});