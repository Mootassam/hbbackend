export default (app) => {
  app.post(`/task/create`, require("./TaskCreate").default);
  app.get(`/task`, require("./TaskList")).default;
  app.get(`/task/:id`, require("./TaskFind")).default;
  app.put(`/task/:id/update`, require("./TaskUpdate"));
  app.delete(`/task/:id/`, require("./TaskDestroy"));
};
