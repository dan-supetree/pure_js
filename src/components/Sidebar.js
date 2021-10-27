import Component from "../core/component.js";
import Repositories from "./Repositories.js";
import Teams from "./Teams.js";
import api from "../apis/index.js";

class Sidebar extends Component {
  constructor($target) {
    super($target);
    this.setup();
    this.render();
    this.mounted();
  }

  template() {
    return `
      <div class="sidebar__section">
        <div class="sidebar__section__profile">
          <figure class="sidebar__section__profile__image">
            <img src="https://avatars.githubusercontent.com/u/72896580?s=40&v=4" alt="dan"/>
          </figure>
          <span class="sidebar__section__profile__name">dan-supetree</span>
        </div>
        <div class="sidebar__section__repositories">
          <div class="repositories">
            <h4>Repositories</h4>
            <div class="repositories__list"></div>
          </div>
          <div class="recent-activities">
            <h4 class="recent-activities__title">Recent activity</h4>
            <p class="recent-activities__desc">When you take actions across GitHub, we’ll provide links to that activity here.</p>
          </div>
          <div class="team">
            <h4 class="team__title">Your teams</h4>
            <div class="team__list"></div>
          </div>
        </div>
      </div>
    `;
  }

  setup() {
    this.state = {
      repositories: [],
      teams: [],
    };
  }

  async mounted() {
    const repositories = await api.fetchRepositories();

    this.setState({ repositories });
    this.render();
  }

  render() {
    const { repositories, teams } = this.state;
    this.target.innerHTML = this.template();
    new Repositories(document.querySelector(".repositories__list"), {
      repositories,
    });
    new Teams(document.querySelector(".team__list"), { teams });
  }
}

export default Sidebar;
