
const express = require('express');
const router = express.Router();
const CourseStudentController = require('../controllers/course-student-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/courseStudent/:courseStudentId", CourseStudentController.getCourseStudentById);
router.get("/courseStudents", CourseStudentController.getAllCourseStudent);
router.post("/courseStudent", CourseStudentController.createCourseStudent);
router.post("/courseStudents", CourseStudentController.createCourseStudents);
router.put("/courseStudent",CourseStudentController.updateCourseStudent);
router.delete("/courseStudent/:courseStudentId", CourseStudentController.deleteCourseStudentById);
module.exports = router;
