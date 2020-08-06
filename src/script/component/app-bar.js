class AppBar extends HTMLElement {

    connectedCallback() {
        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.caption = this.getAttribute("caption") || null;


        this.innerHTML = `
          <img src="${this.src}"
              alt="${this.alt}">
          <h1>aku</h1>
      `;
    }
}


customElements.define("app-bar", AppBar);
