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
    <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
    <div id="myDropdown" class="dropdown-content">
      <div onmousedown="closeDropdown('About')">About</div>
      <div onmousedown="closeDropdown('Base')">Base</div>
      <div onmousedown="closeDropdown('Blog')">Blog</div>
      <div onmousedown="closeDropdown('Contact')">Contact</div>
      <div onmousedown="closeDropdown('Custom')">Custom</div>
      <div onmousedown="closeDropdown('Support')">Support</div>
      <div onmousedown="closeDropdown('Tools')">Tools</div>
    </div>
  </div>`

class SefaSelect extends HTMLElement {

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))

    const script = document.createElement('script')
    script.textContent = `
      var timeout = null
    
      function closeDropdown(x) {
        document.getElementById('myInput').value = x
        document.getElementById("myDropdown").style.display = 'none'
      }
      function blur() {console.log(1221)
        document.getElementById("myDropdown").style.display = 'none'
      }
    
      function focus() {console.log(11)
        document.getElementById("myDropdown").style.display = 'block'
      }
    
      document.getElementById('myInput').addEventListener('focus', () => {focus()})
      document.getElementById('myInput').addEventListener('blur', () => {blur()})
    
      function filterFunction() {
        if(timeout!= null) {
          clearTimeout(timeout)
          timeout = null
          
        }
          timeout = setTimeout(() => {
            console.log("asd asd asd asd")
          }, 500)
      }`

    shadow.appendChild(script)
  }

  connectedCallback() {
    console.log(this.querySelector('div'))
  }

  attributeChangedCallback(name, oldValue, newValue) {

  }

  static get observedAttributes() {
    return ["test"] // attribute ismi
  }

}

customElements.define('sefa-select', SefaSelect)