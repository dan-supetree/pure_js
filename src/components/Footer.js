import Component from "../core/component.js";

class Footer extends Component {
  constructor($target) {
    super($target);
    this.render();
  }

  template() {
    return `
     <footer class="footer">
       <div>@${new Date().getFullYear()},Sample Site</div>
     </footer>
    `;
  }
}

export default Footer;
