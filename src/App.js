import Component from "./core/component.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Sidebar from "./components/Sidebar.js";
import Main from "./components/Main.js";

class App extends Component {
  constructor($target) {
    super($target);
    this.render();
  }

  template() {
    return `
     <div class="main">
        <div class="header-container"></div>
        <div class="content-container">
            <aside class="content-container__sidebar"></aside>
            <div class="content-container__main"></div>
        </div>
        <div class="footer-container"></div>
     </div>
    `;
  }

  render() {
    this.target.innerHTML = this.template();

    new Header(this.target.querySelector("div.header-container"));
    new Footer(this.target.querySelector("div.footer-container"));
    new Sidebar(this.target.querySelector("aside.content-container__sidebar"));
    new Main(this.target.querySelector("div.content-container__main"));
  }
}

export default App;
