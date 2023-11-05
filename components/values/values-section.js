import { DocumentLoader } from "../../services/document-loader.js";

class ValuesSection extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        DocumentLoader.loadCssHtml('/components/values/values-section', shadowRoot);
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
