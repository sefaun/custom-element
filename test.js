class Tooltip extends HTMLElement {

  tooltip_message = 'tooltip-message'

  constructor() {
    super()
    this.innerHTML = `
      <div class="tooltip">
        <span id="${this.tooltip_message}" class="tooltiptext"></span>
        <div id="tooltip-content">${this.innerHTML}</div>
      </div>`
  }

  attributeChangedCallback(name, old_value, new_value) {
    this.querySelector(`#${this.tooltip_message}`).textContent = new_value
  }

  static get observedAttributes() {
    return ['content']
  }

}
customElements.define('tooltip', Tooltip)
