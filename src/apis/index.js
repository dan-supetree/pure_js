const BASE_URL = "https://api.github.com";
const USER = "dan-supetree";
const API_TOKEN = "";

const api = {
  fetchRepositories: async () => {
    try {
      const res = await fetch(`${BASE_URL}/users/${USER}/repos`, {
        headers: {
          accept: "application/vnd.github.v3+json",
        },
      });

      if (res.status === 400) throw Error("400 Bad Request Error");

      if (res.status === 404) throw Error("404 Not Found");

      if (res.status === 200) return res.json();
    } catch (e) {
      console.log(e);
    }
  },
};

export default api;
