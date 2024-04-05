
const express = require('express');
const router = express.Router();
const TypeClassRoomController = require('../controllers/type-class-room-controller');
// const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/typeClassRoom/:typeClassRoomId", TypeClassRoomController.getTypeClassRoomById);
router.get("/typeClassRooms", TypeClassRoomController.getAllTypeClassRoom);
router.post("/typeClassRoom", TypeClassRoomController.createTypeClassRoom)
router.put("/typeClassRoom",TypeClassRoomController.updateTypeClassRoom);
router.delete("/typeClassRoom/:typeClassRoomId", TypeClassRoomController.deleteTypeClassRoomById);
module.exports = router;
