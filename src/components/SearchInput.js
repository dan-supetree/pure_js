import Component from "../core/component.js";

class SearchInput extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
  }

  template() {
    const { placeholder } = this.props;
    return `<input class="search__input" type="text" placeholder="${placeholder}"/>`;
  }
}

export default SearchInput;
