const API_KEY = "http://localhost:3001";

export const fetchData = async () => {
  const response = await fetch(`${API_KEY}/items`);
  const data = await response.json();
  return data;
};
