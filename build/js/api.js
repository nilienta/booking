export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const request = async (url) => {
  const res = await fetch(url);
  return checkResponse(res);
};
