import { html, css } from "lit-element";

import { MkCarousel } from "../mk-carousel.js";

class MkCarouselDemo extends MkCarousel {
  static get styles() {
    return [
      MkCarousel.styles,
      css`
        img {
          width: 100%;
        }
      `,
    ];
  }

  constructor(){
    super();
    this.type = 'slide';
    this.rewind = true;
    this.perPage = 1;
    this.autoPlay = true;
    this.interval = 3000;
  }

  get _getContentTemplate() {
    return html`
      <li class="splide__slide">
        <img src="img/image1.jpg" />
      </li>
      <li class="splide__slide">
        <img src="img/image2.jpg" />
      </li>
      <li class="splide__slide">
        <img src="img/image3.jpg" />
      </li>
      <li class="splide__slide">
        <img src="img/image4.jpg" />
      </li>
      <li class="splide__slide">
        <img src="img/image5.jpg" />
      </li>
      <li class="splide__slide">
        <img src="img/image6.jpg" />
      </li>
      <li class="splide__slide">
        <img src="img/image7.jpg" />
      </li>
    `;
  }
}
customElements.define("mk-carousel-demo", MkCarouselDemo);
