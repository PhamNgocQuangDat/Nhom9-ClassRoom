const express = require('express');
const router = express.Router();
const TestController = require('../controllers/test-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/test", TestController.testCT);
module.exports = router;
