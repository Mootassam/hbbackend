export default (app) => {
    app.post(`/recharge/create`, require("./rechargeCreate").default);
    app.get(`/recharge`, require("./rechargeList")).default;
    app.get(`/recharge/:id`, require("./rechargeFind")).default;
    app.put(`/recharge/:id/update`, require("./rechargeUpdate"));
    app.delete(`/recharge/:id/`, require("./rechargeDestroy"));
  };
  