
const { generateKey } = require('crypto');
const ClassSchool = require('../models/class-school-model');
const { generateId } = require('../helpers/generate-key');

class ClassSchoolService {
  static async getClassSchoolById(classSchoolId) {
    return ClassSchool.findByPk(classSchoolId);
  }
  static async getAllClassSchool() {
    return ClassSchool.findAll();
  }
  static async createClassSchool(classSchoolData) {
    classSchoolData.classSchoolId = generateId();
    return ClassSchool.create(classSchoolData);
  }

  static async updateClassSchool(classSchoolId, classSchoolData) {
    await ClassSchool.update(classSchoolData, {
      where: { classSchoolId: classSchoolId },
    });
    return this.getClassSchoolById(classSchoolId);
  }

  static async deleteClassSchoolById(classSchoolId) {
    return ClassSchool.destroy({
      where: { classSchoolId: classSchoolId },
    });
  }
}

module.exports = ClassSchoolService;
