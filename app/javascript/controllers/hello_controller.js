import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["posts", 'coco', 'john'];

  connect() {
    const element = this.element;
    const input = element.querySelector("input:not([type=hidden])");

        // <%= link_to :back, data: {'hello-target': 'john' } %>

    input.addEventListener("blur", () => {
      this.johnTarget.click()
    });
  }
}
