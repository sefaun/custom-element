const template = document.createElement('template')

template.id = 'sefa-select'
template.innerHTML = `
  <style>
    #myInput {
      width: 100%;
      box-sizing: border-box;
      background-position: 14px 12px;
      background-repeat: no-repeat;
      padding: 8px;
      border: none;
      border: 1px solid #ddd;
    }
    
    #myInput:focus {
      outline: 3px solid #ddd;
    }
    
    .dropdown {
      position: relative;
      display: inline-block;
      width: 200px;
    }
    
    #myDropdown {
      display: none;
    }
    
    .dropdown-content {
      position: absolute;
      width: 100%;
      background-color: #f6f6f6;
      overflow: auto;
      border: 1px solid #ddd;
      z-index: 1;
      max-height: 200px;
    }
    
    .dropdown-content div {
      color: black;
      padding: 8px;
      text-decoration: none;
      display: block;
      cursor: pointer;
    }
    
    .dropdown .dropdown-content div:hover {
      background-color: #ddd;
    }
  </style>

  <div class="dropdown">
    <input type="text" placeholder="Search.." id="myInput">
    <div id="myDropdown" class="dropdown-content">
      <div id="myDropdownItem">About</div>
      <div id="myDropdownItem">Base</div>
      <div id="myDropdownItem">Blog</div>
      <div id="myDropdownItem">Contact</div>
      <div id="myDropdownItem">Custom</div>
      <div id="myDropdownItem">Support</div>
      <div id="myDropdownItem">Tools</div>
    </div>
  </div>`

class SefaSelect extends HTMLElement {

  timeout = null

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot.getElementById('myInput').addEventListener('focus', () => this.focus())
    this.shadowRoot.getElementById('myInput').addEventListener('blur', () => this.blur())
    this.shadowRoot.getElementById('myInput').addEventListener('keyup', () => this.filterFunction())
    this.shadowRoot.querySelectorAll('#myDropdownItem').forEach(value => value.addEventListener('mousedown', () => this.closeDropdown(value.textContent)))
  }

  attributeChangedCallback(name, oldValue, newValue) {

  }

  static get observedAttributes() {
    return ["test"] // attribute ismi
  }

  closeDropdown(x) {
    this.shadowRoot.getElementById('myInput').value = x
    this.shadowRoot.getElementById("myDropdown").style.display = 'none'
  }

  blur() {
    this.shadowRoot.getElementById("myDropdown").style.display = 'none'
  }

  focus() {
    this.shadowRoot.getElementById("myDropdown").style.display = 'block'
  }

  filterFunction() {
    if (this.timeout != null) {
      clearTimeout(this.timeout)
      this.timeout = null

    }
    this.timeout = setTimeout(() => {
      console.log("asd asd asd asd")
    }, 500)
  }

}

customElements.define('sefa-select', SefaSelect)