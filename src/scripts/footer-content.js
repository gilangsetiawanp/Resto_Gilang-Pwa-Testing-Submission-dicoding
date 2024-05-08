class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <p tabindex="0"> &copy; 2024 Gilang <span>Resto</span></p>
  </footer>
    `;
  }
}

customElements.define('footer-content', Footer);
export default Footer;
