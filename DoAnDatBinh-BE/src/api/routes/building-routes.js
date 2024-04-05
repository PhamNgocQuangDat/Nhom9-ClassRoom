
const express = require('express');
const router = express.Router();
const BuildingController = require('../controllers/building-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/building/:buildingId", BuildingController.getBuildingById);
router.get("/buildings", BuildingController.getAllBuilding);
router.post("/building", BuildingController.createBuilding)
router.put("/building",BuildingController.updateBuilding);
router.delete("/building/:buildingId", BuildingController.deleteBuildingById);
module.exports = router;
