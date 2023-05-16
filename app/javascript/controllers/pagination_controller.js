import { Controller } from "@hotwired/stimulus";
import { get } from "@rails/request.js";

// The HTML code for the spinner.
const spinner = `
<div id='spinner' class="spinner-border text-center mr-0" role="status">
</div>`;

export default class extends Controller {
  static fetching = false; // debounce

  static values = {
    url: String,
    page: { type: Number, default: 1 },
  };

  delayTime = 400;

  static targets = ["posts", "noRecords", "targetObject"];

  initialize() {
    this.scroll = this.scroll.bind(this);
  }

  connect() {
    this.targetObjectTarget.addEventListener("scroll", this.scroll);
  }

  scroll() {
    if (this.#pageEnd && !this.fetching && !this.noMoreRecords) {
      this.postsTarget.insertAdjacentHTML("beforeend", spinner);
      this.fetching = true;

      setTimeout(() => {
        this.#loadRecords();
      }, this.delayTime);
    }
  }

  // Send a turbo-stream request to the controller.
  async #loadRecords() {
    const url = new URL(this.urlValue);
    url.searchParams.set("page", this.pageValue);
    document
      .querySelector("#spinner")
      .parentElement.removeChild(document.querySelector("#spinner"));
    const { response } = await get(url.toString(), {
      responseKind: "turbo-stream",
    });

    if (!response || response.status !== 200) {
      this.noMoreRecords = true;
    }

    this.fetching = false;

    this.pageValue += 1;

    if (document.querySelector("#no-more-records")) {
      this.noMoreRecords = true;
    }
  }

  // Detect if we're at the bottom of the page.
  get #pageEnd() {
    const { scrollHeight, scrollTop, clientHeight } = this.targetObjectTarget;

    return scrollHeight - scrollTop - clientHeight < 1000;
  }
}

// d-flex justify-content-center bg-white h-75 p-4 m-3
