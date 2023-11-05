// <values-section>
const template = document.createElement('template');
template.innerHTML = `
  <div>
    <h2>We specialize in</h2>
    <p class="value">Branding & Identity</p>
    <p class="value">Websites & Digital Platforms</p>
    <p class="value">Web3 Experience Design</p>
    <p class="value">eCommerce Experiences</p>
    <p class="value">VR & AR Environments</p>
  </div>
`;

class ValuesSection extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});

        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define('values-section', ValuesSection);
// <values-section>
