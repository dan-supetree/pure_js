import Component from "../core/component.js";

class SearchInput extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
    this.mounted();
  }

  template() {
    const { placeholder, value, isPreviewOpen } = this.props;
    return `
      <input class="search__input" type="text" placeholder="${placeholder}" value="${value}"/>
    `;
  }

  mounted() {
    const { handleChange, handleFocus, handleBlur } = this.props;
    const input = this.target.querySelector(".search__input");
    this.addEvent("change", ".search__input", handleChange);
    input.addEventListener("focus", handleFocus);
    //this.addEvent("blur", ".search__input", handleBlur);
  }
}

export default SearchInput;
