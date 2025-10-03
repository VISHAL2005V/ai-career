import apiClient from "./apiClient";

export const loginUser = async (email, password) => {
  const res = await apiClient.post("/auth/login", { email, password });
  return res.data;
};

export const registerUser = async (userData) => {
  const res = await apiClient.post("/auth/register", userData);
  return res.data;
};
