import axios from "axios";

const instance = axios.create({
  baseURL: "https://eliftece-back-end.onrender.com",
});

export const getProducts = async ({ shop }) => {
  const result = await instance.get(`/api/products/${shop}`);
  return result;
};

export const getProductsById = async (products) => {
  const result = await instance.post(`/api/products/`, products);
  return result;
};
