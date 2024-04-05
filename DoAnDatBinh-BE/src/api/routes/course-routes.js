
const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/course-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/course/:courseId", CourseController.getCourseById);
router.get("/courses", CourseController.getAllCourse);
router.post("/course", CourseController.createCourse)
router.put("/course",CourseController.updateCourse);
router.delete("/course/:courseId", CourseController.deleteCourseById);
module.exports = router;
