
const express = require('express');
const router = express.Router();
const ClassSchoolController = require('../controllers/class-school-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/classSchool/:classSchoolId", ClassSchoolController.getClassSchoolById);
router.get("/classSchools", ClassSchoolController.getAllClassSchool);
router.post("/classSchool", ClassSchoolController.createClassSchool)
router.put("/classSchool",ClassSchoolController.updateClassSchool);
router.delete("/ClassSchool/:classSchoolId", ClassSchoolController.deleteClassSchoolById);
module.exports = router;
