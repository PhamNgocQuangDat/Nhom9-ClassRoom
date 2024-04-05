
const express = require('express');
const router = express.Router();
const LessonController = require('../controllers/lesson-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/lesson/:lessonId", LessonController.getLessonById);
router.get("/lessons", LessonController.getAllLesson);
router.post("/lesson", LessonController.createLesson);
router.post("/lessons", LessonController.createLessons);
router.put("/lesson",LessonController.updateLesson);
router.delete("/lesson/:lessonId", LessonController.deleteLessonById);
module.exports = router;
