import api from "../apis/index.js";
import Component from "../core/component.js";
import ActivityList from "./ActivityList.js";

class Main extends Component {
  constructor($target) {
    super($target);
    this.setup();
    this.render();
    this.mounted();
  }

  template() {
    return `
     <div class="main__section">
        <h4>All activity</h4>
        <div class="activity__list"></div>
     </div>
    `;
  }

  setup() {
    this.state = {
      activities: [],
    };
  }

  async mounted() {
    const activities = await api.fetchAllActivities();
    this.setState({ activities });
    this.render();
  }

  render() {
    const { activities } = this.state;
    this.target.innerHTML = this.template();
    new ActivityList(this.target.querySelector(".activity__list"), {
      activities,
    });
  }
}

export default Main;
