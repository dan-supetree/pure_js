import Component from "../core/component.js";

class SearchInput extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
    this.mounted();
  }

  template() {
    const { placeholder, value } = this.props;
    return `
      <input class="search__input" type="text" placeholder="${placeholder}" value="${value}"/>
    `;
  }

  mounted() {
    const { handleChange } = this.props;
    this.addEvent("change", ".search__input", handleChange);
  }
}

export default SearchInput;
