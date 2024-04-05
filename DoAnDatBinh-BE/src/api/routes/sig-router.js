// userRoutes.js

const express = require('express');
const router = express.Router();
const SigController = require('../controllers/sig-controller');
const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes

router.post("/sig/user-login-id",  SigController.staffLoginId);
router.post("/sig/student-login",  SigController.studentLogin);



module.exports = router;
