class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero" id="hero">
    <div class="overlay">
      <h2 tabindex="0">Temukan Ragam <span>Kuliner Terbaik </span> di Kota Anda!</h2>
    </div>
    </div>
    `;
  }
}

customElements.define('hero-content', Hero);
export default Hero;
