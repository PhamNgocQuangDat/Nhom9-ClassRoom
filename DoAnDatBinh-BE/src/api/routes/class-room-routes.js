
const express = require('express');
const router = express.Router();
const ClassRoomController = require('../controllers/class-room-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/classRoom/:classRoomId", ClassRoomController.getClassRoomById);
router.get("/classRooms", ClassRoomController.getAllClassRoom);
router.post("/classRoom", ClassRoomController.createClassRoom)
router.put("/classRoom",ClassRoomController.updateClassRoom);
router.delete("/classRoom/:classRoomId", ClassRoomController.deleteClassRoomById);
module.exports = router;
