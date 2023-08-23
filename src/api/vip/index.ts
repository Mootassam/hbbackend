export default (app) => {
    app.post(`/vip/create`, require("./vipCreate").default);
    app.get(`/vip`, require("./vipList")).default;
    app.get(`/vip/:id`, require("./vipFind")).default;
    app.put(`/vip/:id/update`, require("./vipUpdate"));
    app.delete(`/vip/:id/`, require("./vipDestroy"));
  };
  