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
        <ul class="repository-list">
          ${this.props.repositories
            .map(
              ({ full_name: fullName, owner }) => `
            <li class="repository-item">
                <div>
                  <figure class="repository-item__img">
                    <img  src="${owner.avatar_url}" alt="${owner.login}"/>
                  </figure>
                  <div class="repository-item__name">${fullName}</div>
                </div>
            </li>
          `
            )
            .join("")}
        </ul>
        `;
  }
}

export default Repositories;
