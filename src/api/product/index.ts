export default (app) => {
    app.post(`/product/create`, require("./productCreate").default);
    app.get(`/product`, require("./productList")).default;
    app.get(`/product/:id`, require("./productFind")).default;
    app.put(`/product/:id/update`, require("./productUpdate"));
    app.delete(`/product/:id/`, require("./prooductDestroy"));
  };
  