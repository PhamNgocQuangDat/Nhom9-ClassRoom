
const express = require('express');
const router = express.Router();
const CourseTeacherController = require('../controllers/course-teacher-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/courseTeacher/:courseTeacherId", CourseTeacherController.getCourseTeacherById);
router.get("/courseTeachers", CourseTeacherController.getAllCourseTeacher);
router.post("/courseTeacher", CourseTeacherController.createCourseTeacher)
router.put("/courseTeacher",CourseTeacherController.updateCourseTeacher);
router.delete("/courseTeacher/:courseTeacherId", CourseTeacherController.deleteCourseTeacherById);
module.exports = router;
