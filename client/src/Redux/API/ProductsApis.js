import axios from "axios";

// ************ PUBLIC APIs ************
const baseUrl = process.env.REACT_APP_API_URL;
// get all Cards
const getcardsService = async ({ pageNumber, category, tag, search, sort }) => {
  const { data } = await axios.get(
    `${baseUrl}/api/products?pageNumber=${pageNumber}&category=${category}&tag=${tag}&search=${search}&sort=${sort}`
  );

  return data;
};

// get card by id
const getCardByIdService = async (id) => {
  const { data } = await axios.get(`${baseUrl}/api/products/${id}`);
  return data;
};

// get tags
const getTagsService = async () => {
  const { data } = await axios.get(`${baseUrl}/api/products/all/tags`);
  return data;
};

// export all functions
export { getcardsService, getCardByIdService, getTagsService };
