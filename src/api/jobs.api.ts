import api from "./axios";

export async function getJobs() {
  const { data } = await api.get("/jobs");
  return data;
}

export async function getJobById(id: number) {
  const { data } = await api.get(`/jobs/${id}`);
  return data;
}