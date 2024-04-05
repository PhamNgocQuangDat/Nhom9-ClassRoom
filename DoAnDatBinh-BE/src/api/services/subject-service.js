
const { generateKey } = require('crypto');
const Subject = require('../models/subject-model');
const { generateId } = require('../helpers/generate-key');

class SubjectService {
  static async getSubjectById(subjectId) {
    return Subject.findByPk(subjectId);
  }
  static async getAllSubject() {
    return Subject.findAll();
  }
  static async createSubject(subjectData) {
    subjectData.subjectId = generateId()
    return Subject.create(subjectData);
  }

  static async updateSubject(subjectId, subjectData) {
    await Subject.update(subjectData, {
      where: { subjectId: subjectId },
    });
    return this.getSubjectById(subjectId);
  }

  static async deleteSubjectById(subjectId) {
    return Subject.destroy({
      where: { subjectId: subjectId },
    });
  }
}

module.exports = SubjectService;
