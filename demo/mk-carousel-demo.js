import { html } from "lit-element";

import { MkCarousel } from "../mk-carousel.js";

class MkCarouselDemo extends MkCarousel {
  get _getContentTemplate() {
    return html`
      <div class="slide">
        <img src="img/image1.jpg" alt="" />
      </div>
      <div class="slide">
        <img src="img/image2.jpg" alt="" />
      </div>
      <div class="slide">
        <img src="img/image3.jpg" alt="" />
      </div>
    `;
  }
}
customElements.define("mk-carousel-demo", MkCarouselDemo);
