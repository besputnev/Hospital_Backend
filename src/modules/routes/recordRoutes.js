const Router = require("express");
const recordRoutes = new Router();

const {
  getAllRecords,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordsControllers");

recordRoutes.get("/allRecords", getAllRecords);
recordRoutes.post("/createRecord", createRecord);
recordRoutes.patch("/updateRecord", updateRecord);
recordRoutes.delete("/deleteRecord", deleteRecord);

module.exports = recordRoutes;
