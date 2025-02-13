import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

  constructor() {
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
    <h1>Welcome Back Rory</h1>

    <p>
      Sed ut perspiciatis unde omnis iste natus
      error sit voluptatem accusantium
    </p>

    <p>
      <a href="/posts" data-link>View Posts</a>
    </p>
    `;
  }

}
