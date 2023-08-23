export default (app) => {
  app.post(`/brand/create`, require("./brandCreate").default);
  app.get(`/brand`, require("./brandList")).default;
  app.get(`/brand/:id`, require("./brandList")).default;
  app.put(`/brand/:id/update`, require("./brandUpdate"));
  app.delete(`/brand/:id/`, require("./brandDestroy"));
};
