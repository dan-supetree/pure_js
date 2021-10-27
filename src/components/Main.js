import Component from "../core/component.js";
import ActivityList from "./ActivityList.js";

class Main extends Component {
  constructor($target) {
    super($target);
    this.render();
  }

  template() {
    return `
     <div class="main__section">
      <h4>All activity</h4>
      <div class="activity__list">
      </div>
     </div>
    `;
  }

  render() {
    this.target.innerHTML = this.template();
    new ActivityList(this.target.querySelector(".activity__list"));
    this.mounted();
  }
}

export default Main;
