
const { generateKey } = require('crypto');
const ClassRoom = require('../models/class-room-model');
const Building = require('../models/building-model');
const TypeClassRoom = require('../models/type-class-room-model');
const { generateId } = require('../helpers/generate-key');

class ClassRoomService {
  static async getClassRoomById(classRoomId) {
    return ClassRoom.findByPk(classRoomId, { include: [{ model: Building }, { model: TypeClassRoom }] });
  }
  static async getAllClassRoom() {
    return ClassRoom.findAll({ include: [{ model: Building }, { model: TypeClassRoom }] });
  }
  static async createClassRoom(classRoomData) {
    classRoomData.classRoomId = generateId()
    return ClassRoom.create(classRoomData);
  }

  static async updateClassRoom(classRoomId, classRoomData) {
    await ClassRoom.update(classRoomData, {
      where: { classRoomId: classRoomId },
    });
    return this.getClassRoomById(classRoomId);
  }

  static async deleteClassRoomById(classRoomId) {
    return ClassRoom.destroy({
      where: { classRoomId: classRoomId },
    });
  }
}

module.exports = ClassRoomService;
