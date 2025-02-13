import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

  constructor(params) {
    super(params);
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
    <h1>Adjust your settings</h1>

    <button class="btn btn">Profile</button>
    <button class="btn btn">Account</button>
    <button class="btn btn">Storage</button>
    <button class="btn btn">Subscribers</button>


    `;
  }

}
