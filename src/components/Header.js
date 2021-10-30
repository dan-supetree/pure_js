import Component from "../core/component.js";
import SearchInput from "./SearchInput.js";

class Header extends Component {
  constructor($target) {
    super($target);
    this.setup();
    this.render();
  }

  setup() {
    const q = window.location.search.replace(/\?q=/, "");
    this.state = {
      value: q || "",
      isPreviewOpen: false,
    };
  }

  template() {
    return `
        <header class="header">
            <div class="header__logo">Logo</div>
            <div class="header__search">
              <div class="search__container"></div>
            </div>
            <div class="header__menu">
                <a href="#pull_request">Pull request</a>
                <a href="#issues">Issues</a>
            </div>
        </header>
    `;
  }

  render() {
    const { value, isPreviewOpen } = this.state;
    this.target.innerHTML = this.template();
    new SearchInput(this.target.querySelector(".search__container"), {
      placeholder: "Search or jump to...",
      value,
      isPreviewOpen,
      handleChange: (e) => {
        e.preventDefault();
        const { value } = e.target;
        history.pushState({ q: value }, "", `?q=${value}`);
      },
      handleFocus: (e) => {
        console.log(e.target);
        this.setState({ isPreviewOpen: true, value });
      },
      handleBlur: (e) => {
        this.setState({ value: "", isPreviewOpen: false });
      },
    });
  }
}

export default Header;
