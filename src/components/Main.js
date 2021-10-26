import Component from "../core/component.js";

class Main extends Component {
  constructor($target) {
    super($target);
    this.render();
  }

  template() {
    return `
     <div class="main__section>
      <h4>All activity</h4>
     </div>
    `;
  }
}

export default Main;
