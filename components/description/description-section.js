import { DocumentLoader } from "../../services/document-loader.js";

class DescriptionSection extends HTMLElement {
  constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'closed' });
      DocumentLoader.loadCssHtml('/components/description/description-section', shadowRoot);
  }
}

customElements.define('description-section', DescriptionSection);
