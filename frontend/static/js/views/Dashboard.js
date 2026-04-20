import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
    <h1>Welcome Back Rory</h1>

    <p>
      Node JS content management system, deployed with Docker.
      <br>
      Master Docker and become a 10X sysadmin
    </p>

    <p>
      <a href="/posts" data-link>View Posts</a>
    </p>
    `;
  }

}
