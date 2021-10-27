import Component from "../core/component.js";
import SearchInput from "./SearchInput.js";

class Header extends Component {
  constructor($target) {
    super($target);

    this.render();
  }

  setup() {
    this.state = {
      value: "",
      onChange: () => {},
    };
  }

  template() {
    return `
        <header class="header">
            <div class="header__logo">Logo</div>
            <div class="header__search">
              <div class="search__container">
              </div>
            </div>
            <div class="header__menu">
                <a href="#pull_request">Pull request</a>
                <a href="#issues">Issues</a>
            </div>
        </header>
    `;
  }

  render() {
    this.target.innerHTML = this.template();

    new SearchInput(this.target.querySelector(".search__container"), {
      placeholder: "Search or jump to...",
    });
  }
}

export default Header;
