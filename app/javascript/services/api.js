import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

function csrfHeaders() {
  const token = document.querySelector('[name="csrf-token"]') || {
    content: "no-csrf-token",
  };
  return { ...headers, "X-CSRF-Token": token.content };
}

async function get(path, queryParams = {}) {
  return axios.get(path, { headers: csrfHeaders() });
}

async function post(path, body) {
  return axios.post(path, body, { headers: csrfHeaders() });
}

async function patch(path, body) {
  return axios.patch(path, body, { headers: csrfHeaders() });
}

export default {
  get,
  post,
  patch,
};
