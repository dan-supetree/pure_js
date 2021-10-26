import Component from "../core/component.js";

class Repositories extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
  }

  template() {
    if (!this.props?.repositories?.length)
      return `<div class="list-empty">No Repositories</div>`;

    return `
        <ul>
          ${this.props.repositories.map(
            ({ src, name }) => `
            <li>
                <div>
                  <img src="${src}" alt="${name}"/>
                  <div>${name}</div>
                </div>
            </li>
        `
          )}
        </ul>
        `;
  }
}

export default Repositories;
