
const express = require('express');
const router = express.Router();
const SubjectController = require('../controllers/subject-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/subject/:subjectId", SubjectController.getSubjectById);
router.get("/subjects", SubjectController.getAllSubject);
router.post("/subject", SubjectController.createSubject)
router.put("/subject",SubjectController.updateSubject);
router.delete("/subject/:subjectId", SubjectController.deleteSubjectById);
module.exports = router;
