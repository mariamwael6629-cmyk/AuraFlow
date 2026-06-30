import api from "./client";

export const authApi = {
  register: (data) => api.post("/auth/register", data),
  login: (data) => api.post("/auth/login", data),
  me: () => api.get("/auth/me"),
};

export const workflowsApi = {
  list: () => api.get("/workflows"),
  create: (data) => api.post("/workflows", data),
  update: (id, data) => api.put(`/workflows/${id}`, data),
  remove: (id) => api.delete(`/workflows/${id}`),
  run: (id) => api.post(`/workflows/${id}/run`),
};

export const templatesApi = {
  list: () => api.get("/templates"),
  use: (id) => api.post(`/templates/${id}/use`),
};

export const integrationsApi = {
  list: () => api.get("/integrations"),
};

export const analyticsApi = {
  summary: () => api.get("/analytics/summary"),
};

export const executionsApi = {
  list: () => api.get("/executions"),
};

export const notificationsApi = {
  list: () => api.get("/notifications"),
  markAllRead: () => api.post("/notifications/read-all"),
};

export const teamApi = {
  list: () => api.get("/team"),
  invite: (data) => api.post("/team", data),
};

export const schedulerApi = {
  list: () => api.get("/scheduler/triggers"),
  update: (id, data) => api.patch(`/scheduler/triggers/${id}`, data),
};
