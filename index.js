class SefaTag extends HTMLElement {

  constructor() {
    super()
    this.innerHTML = `<div>
      <div>icerikler</div>
      <div id="ozel-icerik">${this.innerHTML}</div>
    </div>`
  }

}

customElements.define('sefa-tag', SefaTag)

function sefa() {
  console.log("clicked")
}