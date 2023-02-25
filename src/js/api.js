export const checkResponse = (res) =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const fetchRequest = async (url) => {
  const res = await fetch(url);
  return checkResponse(res);
};

export const sendData = async (URL, onSuccess, onFail, data) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      onSuccess();
    } else {
      onFail(response.status);
    }
  } catch (error) {
    onFail(error.message);
  }
};
