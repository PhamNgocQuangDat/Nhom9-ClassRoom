
const express = require('express');
const router = express.Router();
const SessionController = require('../controllers/session-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/session/:sessionId", SessionController.getSessionById);
router.get("/sessions", SessionController.getAllSession);
router.post("/session", SessionController.createSession);
router.post("/sessions", SessionController.createSessions);
router.put("/session",SessionController.updateSession);
router.delete("/session/:sessionId", SessionController.deleteSessionById);
module.exports = router;
