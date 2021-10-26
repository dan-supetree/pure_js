class Component {
  target = null;
  state = null;
  props = null;

  constructor(target, props) {
    this.target = target;
    this.props = props;
  }

  setup() {}

  template() {
    return "";
  }

  setEvent() {}

  addEvent(eventType, selector, callback) {
    const children = [...this.target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.target.addEventListener(eventType, (e) => {
      if (!isTarget(e.target)) return false;
      callback(e);
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  mounted() {}

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }
}

export default Component;
