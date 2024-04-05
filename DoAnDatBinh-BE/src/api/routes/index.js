// index.js
const express = require('express');
const router = express.Router();
const buildingRoutes = require('./building-routes')
const classRoomRoutes = require('./class-room-routes')
const typeClassRoomRoutes = require('./type-class-room-routes')
const userRoutes = require('./user-routes')
const studentRoutes = require('./student-router')
const sigRouter = require('./sig-router')
const testRouter = require('./test-router')
const courseRouter = require('./course-routes')
const courseStudentRouter = require('./course-student-routes')
const courseTeacherRouter = require('./course-teacher-routes')
const lessonRouter = require('./lesson-routes')
const sessionRouter = require('./session-routes')
const subjectRouter = require('./subject-routes')
const classSchoolRouter = require('./class-school-router')
const semestertRouter = require('./semester-router')
const accountRouter = require('./account-router')




router.use(buildingRoutes);
router.use(classRoomRoutes);
router.use(typeClassRoomRoutes);
router.use(userRoutes);
router.use(studentRoutes);
router.use(sigRouter);
router.use(testRouter);
router.use(courseRouter);
router.use(courseStudentRouter);
router.use(courseTeacherRouter);
router.use(lessonRouter);
router.use(sessionRouter);
router.use(subjectRouter);
router.use(classSchoolRouter);
router.use(semestertRouter);
router.use(accountRouter);
module.exports = router;
