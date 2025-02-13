import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

  constructor(params) {
    super(params);
    this.setTitle("Single Post View");
  }

  async getHtml() {
    // console.log(this.params.id)
    return `
    <h1>Post Title</h1>

    <div class="flex">
    <p>Post Content</p>
    </div>


    `;
  }

}
