import axios from "axios";

// ************ PUBLIC APIs ************
const baseUrl = process.env.REACT_APP_API_URL;

// get all categories
const getCategoriesService = async () => {
  const { data } = await axios.get(`${baseUrl}/api/categories`);
  return data;
};

export { getCategoriesService };
