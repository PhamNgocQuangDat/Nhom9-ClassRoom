// userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');
const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
// router.post('/register', noAuthMiddleware, UserController.)
router.get("/user/:userId", UserController.getUserById);
router.get("/users",  UserController.getAllUser);
router.post("/user",  UserController.createUser)
router.put("/user",  UserController.updateUser);
router.delete("/user/:userId", UserController.deleteUserById);
module.exports = router;
