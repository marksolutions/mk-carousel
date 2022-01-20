import { LitElement, html, css } from "lit-element";


/**
 * Behaviour
 * - Auto scroll
 * - Navigator on left and right.
 *  - left is invisible when first item is visible
 *  - right is invisible when last item is visible
 * - indicator
 *  - depends on number of items, should be divided by number of items shows on screen.
 */

export class MkCarousel extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          min-height: 100vh;
          margin: 0;
        }

        .slide{
          position: absolute;
          top: 0;
          bottom: 0;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="container">
        <div class="track-container">${this._getContentTemplate}</div>
      </div>
    `;
  }

  get _getContentTemplate() {
    return html`<slot></slot>`;
  }
}
customElements.define("mk-carousel", MkCarousel);
