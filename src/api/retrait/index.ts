export default (app) => {
    app.post(`/retrait/create`, require("./retraitCreate").default);
    app.get(`/retrait`, require("./retraitList")).default;
    app.get(`/retrait/:id`, require("./retraitFind")).default;
    app.put(`/retrait/:id/update`, require("./retraitUpdate.ts"));
    app.delete(`/retrait/:id/`, require("./retraitDestroy"));
  };
  