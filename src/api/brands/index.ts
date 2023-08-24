export default (app) => {
  app.get(`/brand`, require("./brandList")).default;
  app.get(`/brand/:id`, require("./brandList")).default;
  app.post(`/brand/create`, require("./brandCreate").default);
  app.put(`/brand/:id/update`, require("./brandUpdate"));
  app.delete(`/brand/:id/`, require("./brandDestroy"));
};
