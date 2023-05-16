import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    const input = this.element.querySelector("input:not([type=hidden])");
  }
}
