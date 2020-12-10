// Random User API
// https://randomuser.me/documentation#howto
const API = "https://randomuser.me/api/?results=52";

/**
 * Fetch Data
 *
 * return Array<User>
 */
async function fetchData() {
  return new Promise((res, rej) => {
    try {
      fetch(API)
        .then((result) => result.json())
        .then(({ results }) => res(results));
    } catch (error) {
      rej(error);
    }
  });
}

export { fetchData };
