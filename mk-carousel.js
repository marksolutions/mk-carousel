import { LitElement, html, css } from "lit-element";

class MkCarousel extends LitElement {

  static get styles(){
    return [
      css`
        :host{
          display: block;
          min-height: 100vh;
        }
      `
    ]
  }

  render() {
    return html`
      Mk - carousel
    `;
  }
}
customElements.define("mk-carousel", MkCarousel);
