const API_KEY = "http://localhost:3001";

export const postData = async (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(`${API_KEY}/order`, requestOptions);
  const data = response.json();
  return data;
};
