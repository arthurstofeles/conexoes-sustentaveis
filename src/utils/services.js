import { apiInstance } from "@/utils/api-instance";
import { ENDPOINTS } from "@/utils/constants";

export const login = async (payload) => {
  const { data } = await apiInstance.post(ENDPOINTS.LOGIN, payload);
  return data;
};

export const ideias = async () => {
  const { data } = await apiInstance.get(ENDPOINTS.IDEIAS);
  return data;
};

export const ideia = async (id) => {
  const { data } = await apiInstance.get(ENDPOINTS.IDEIAS + id);
  return data;
};
