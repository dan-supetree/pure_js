import Component from "../core/component.js";

class Header extends Component {
  constructor($target) {
    super($target);

    this.render();
  }

  template() {
    return `
        <header class="header">
            <div class="header__logo">Logo</div>
            <div class="header__menu">
                <a href="#pull_request">Pull request</a>
                <a href="#issues">Issues</a>
            </div>
        </header>
    `;
  }
}

export default Header;
