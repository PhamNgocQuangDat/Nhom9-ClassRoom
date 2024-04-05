
const express = require('express');
const router = express.Router();
const SemesterController = require('../controllers/semester-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/semester/:semesterId", SemesterController.getSemesterById);
router.get("/semesters", SemesterController.getAllSemester);
router.post("/semester", SemesterController.createSemester)
router.put("/semester",SemesterController.updateSemester);
router.delete("/Semester/:semesterId", SemesterController.deleteSemesterById);
module.exports = router;
