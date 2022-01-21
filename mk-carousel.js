import { LitElement, html, css } from "lit-element";
import { defaultStyle, skyblueStyle, seablueStyle } from "./style";
import Splide from "@splidejs/splide";

/**
 * Behaviour
 * - AutoPlay (Boolean)
 * - HasNavigator (Boolean)
 *  - Navigator on left and right.
 *   - left is invisible when first item is visible
 *   - right is invisible when last item is visible
 * - HasIndicator (Boolean)
 *  - depends on number of items, should be divided by number of items shows on screen.
 */

export class MkCarousel extends LitElement {
  static get styles() {
    return [
      defaultStyle,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * Type of Carousel, possible values - slide(default), loop, fade
       */
      type: {
        type: String,
        reflect: true,
      },

      /**
       * Determines whether to rewind the slider or not. This does not work in the loop mode. Default false.
       */
      rewind: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Determines the number of slides to display in a page. The value must be an integer. Default 1.
       */
      perPage: {
        type: Number,
      },

      /**
       * Boolean, auto play slider when property is true.
       */
      autoPlay: {
        type: Boolean,
        reflect: true,
      },

      /**
       * The autoplay interval duration in milliseconds, default 5000. Use the `data-splide-interval` attribute to override this value for the specific slide.
       * e.g. 
       * <li class="splide__slide" data-splide-interval="1000"></li>
       * <li class="splide__slide" data-splide-interval="10000"></li>
       */
      interval: {
        type: Number
      },

      /**
       * shows navigator at left and right side when property is true.
       */
      hasNavigator: {
        type: Boolean,
        reflect: true,
      },

      /**
       * shows Indicator at bottom depends on total items when property is true.
       */
      hasIndicator: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.type = "slide";
    this.rewind = false;
    this.perPage = 1;
    this.autoPlay = false;
    this.interval = 5000;
  }

  render() {
    return html`
      <div class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            ${this._getContentTemplate}
          </ul>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    let element = this.renderRoot.querySelector(".splide");
    new Splide(element, {
      type: this.type,
      rewind: this.rewind,
      autoplay: this.autoPlay,
      perPage: this.perPage,
      interval: this.interval,
    }).mount();
  }

  get _getContentTemplate() {
    return html`<slot></slot>`;
  }
}
customElements.define("mk-carousel", MkCarousel);
