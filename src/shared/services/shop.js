import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getProducts = async ({ shop }) => {
  const result = await instance.get(`/api/products/${shop}`);
  return result;
};

export const getProductsById = async (products) => {
  const result = await instance.post(`/api/products/`, products);
  return result;
};
