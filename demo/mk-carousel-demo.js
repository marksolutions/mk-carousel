import {LitElement, html} from 'lit-element';

import "../mk-carousel.js";

class MkCarouselDemo extends LitElement {
  render() {
    return html`
      <mk-carousel></mk-carousel>
    `;
  }
}
customElements.define('mk-carousel-demo', MkCarouselDemo);