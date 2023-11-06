const template = document.createElement('template');
template.innerHTML = `
<style>
    
    #values-container {
        height: 100vh;
        padding-inline: 10%;
        display: flex;
        font-weight: 400;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #fff;
        transition: all 0.3s ease-in-out;
    }
    
    .value {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        gap: 2rem;
        font-family: GT-Haptik-Medium ,sans-serif;
        line-height: 1.25;
        color: #444;    
        cursor: pointer;
    }
    
    .value span {
        opacity: 0;
        margin-left: 1rem;
        pointer-events: none;
    }
</style>
<div id="values-container">
    <h2>We specialize in</h2>
    <p data-image="web" class="value">Développement Web<span>&#8594;</span></p>
    <p data-image="mobile" class="value">Développement Logiciel<span>&#8594;</span></p>
    <p data-image="mobile" class="value">Développement Mobile<span>&#8594;</span></p>
    <p data-image="green" class="value">Marketing et Digitalisation<span>&#8594;</span></p>
</div>
`;

class ValuesSection extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }

    connectedCallback() {
        const values = this.shadowRoot.querySelectorAll('.value');
        values.forEach(value => {
            value.addEventListener('mouseenter', () => this.animateIn(value));
            value.addEventListener('mouseleave', () => this.animateOut(value));
        });
    }

    animateIn(element) {
        const arrow = element.querySelector('span');
        const valuesContainer = this.shadowRoot.querySelector('#values-container');
        gsap.to(arrow, {opacity: 1, duration: 0.3});
        gsap.to(element, {x: 20, color: '#000'});
        gsap.to(valuesContainer, {
            backgroundImage: `url(./assets/images/values/${element.dataset.image}.jpg)`,
            backgroundColor: element.dataset.image,
            duration: 0.3
        });
    }

    animateOut(element) {
        const arrow = element.querySelector('span');
        gsap.to(arrow, { opacity: 0, duration: 0.3 });
        gsap.to(element, {x: 0, color: '#444'});
    }
}

customElements.define('values-section', ValuesSection);
