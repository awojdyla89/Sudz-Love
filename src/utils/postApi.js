import tokenService from "./tokenService";

const BASE_URL = "/api/posts";

export function create(post) {
  return fetch(BASE_URL, {
    method: "POST",
    body: post,
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

export function getAll() {
  return fetch(BASE_URL, {
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

export function removePost(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}
