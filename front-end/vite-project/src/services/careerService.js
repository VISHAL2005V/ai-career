import apiClient from "./apiClient";

export const getCareerSuggestions = async (skills) => {
  try {
    const response = await apiClient.post("/careers/suggestions", { skills });
    return response.data;
  } catch (err) {
    console.error("Career API Error:", err.response || err.message);
    throw err;
  }
};
