import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000/",
});

export const getMcdonalsShop = async (data) => {
  const result = await instance.get("shop/mcdonals", data);
  return result;
};
