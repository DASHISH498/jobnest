import api from "./axios";

export async function login(payload: unknown) {
  const { data } = await api.post("/auth/login", payload);
  return data;
}

export async function register(payload: unknown) {
  const { data } = await api.post("/auth/register", payload);
  return data;
}