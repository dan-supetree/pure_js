import Component from "../core/component.js";

class Teams extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
  }

  template() {
    if (!this.props.teams.length)
      return `<div class="list-empty">No Teams</div>`;
    return `
    <ul>
      ${this.props.teams.map(
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

export default Teams;
