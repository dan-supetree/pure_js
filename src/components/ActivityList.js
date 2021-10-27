import Component from "../core/component.js";
import { eventActionType } from "../data/index.js";

class ActivityList extends Component {
  constructor($target, props) {
    super($target, props);
    this.render();
  }

  template() {
    const { activities = [] } = this.props;
    if (!activities.length) return `<div>No Activity</div>`;
    return `<ul class="activity">
      ${activities
        .map(
          (activity) => `
      <li>
        <div class="activity__card">
          <h4 class="activity__card__event">${activity.actor.login} ${
            eventActionType[activity.type]
          } ${activity.repo.name}</h4>
          <div class="activity__card__repo">
            <h5 class="activity__card__repo__title">${activity.repo.name}</h5>
            <p class="activity__card__repo__description">${
              activity.payload.description || ""
            }</p>
          </div>
        </div>
      </li>`
        )
        .join("")}
    </ul>`;
  }
}

export default ActivityList;
