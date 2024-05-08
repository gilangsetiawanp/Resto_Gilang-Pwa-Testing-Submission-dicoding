class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <h1><a href="">Gilang <span> Resto </span></a></h1>
    <a href="#" id="menu" class="header-menu">☰</a>
    <nav id="drawer" class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://github.com/setiawangilang">About Us</a></li>
      </ul>
    </nav>
  </header>
    `;
  }
}

customElements.define('header-content', Header);
export default Header;
