import axios from "axios";

// ************ PUBLIC APIs ************

// get all categories
const getCategoriesService = async () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const { data } = await axios.get(`${baseUrl}/api/categories`);
  return data;
};

export { getCategoriesService };
