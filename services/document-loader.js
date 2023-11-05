export class DocumentLoader {
    static loadCssHtml(fileSrc, shadowRoot) {
      DocumentLoader.loadCss(`${fileSrc}.css`, shadowRoot);
      DocumentLoader.loadHtml(`${fileSrc}.html`, shadowRoot);
    }
  
    static loadHtml(fileSrc, shadowRoot) {
      // Load HTML content from the HTML file
      fetch(fileSrc)
        .then(response => response.text())
        .then(htmlContent => {
          // Create an element containing the HTML
          const container = document.createElement('section');
          container.innerHTML = htmlContent;
          
          // Add the content to the shadowRoot
          shadowRoot.appendChild(container);
        })
        .catch(error => {
            console.error('Error loading HTML file', error);
        });
    }
  
    static loadCss(fileSrc, shadowRoot) {
      // Fetch and load CSS content
      fetch(fileSrc)
        .then(response => response.text())
        .then(cssContent => {
          // Create a <style> element for the CSS
          const styleElement = document.createElement('style');
          styleElement.textContent = cssContent;
  
          // Attach the <style> element to the shadow DOM
          shadowRoot.appendChild(styleElement);
        })
        .catch (error => {
            console.error('Error loading CSS file', error);
        });
    }

  }
  