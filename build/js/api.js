export const checkResponse = (res) => res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const fetchRequest = async (url) => {
  const res = await fetch(url);
  return checkResponse(res);
};
