const BASE_URL = "https://api.github.com";
const USER = "dan-supetree";
const API_TOKEN = "";

export const getRepositories = () =>
  fetch(`${BASE_URL}/${USER}/repos`, {
    headers: {
      Authorization: `Basic ${API_TOKEN}`,
    },
  }).then((response) => response.json());
