
const { generateKey } = require('crypto');
const TypeClassRoom = require('../models/type-class-room-model');
const { generateId } = require('../helpers/generate-key');

class TypeClassRoomService {
  static async getTypeClassRoomById(typeClassRoomId) {
    return TypeClassRoom.findByPk(typeClassRoomId);
  }
  static async getAllTypeClassRoom() {
    return TypeClassRoom.findAll();
  }
  static async createTypeClassRoom(typeClassRoomData) {
    typeClassRoomData.typeClassRoomId = generateId()
    return TypeClassRoom.create(typeClassRoomData);
  }

  static async updateTypeClassRoom(typeClassRoomId, typeClassRoomData) {
    await TypeClassRoom.update(typeClassRoomData, {
      where: { typeClassRoomId: typeClassRoomId },
    });
    return this.getTypeClassRoomById(typeClassRoomId);
  }

  static async deleteTypeClassRoomById(typeClassRoomId) {
    return TypeClassRoom.destroy({
      where: { typeClassRoomId: typeClassRoomId },
    });
  }
}

module.exports = TypeClassRoomService;
