
const { generateKey } = require('crypto');
const Semester = require('../models/semester-model');
const { generateId } = require('../helpers/generate-key');

class SemesterService {
  static async getSemesterById(semesterId) {
    return Semester.findByPk(semesterId);
  }
  static async getAllSemester() {
    return Semester.findAll();
  }
  static async createSemester(semesterData) {
    semesterData.semesterId = generateId()
    return Semester.create(semesterData);
  }

  static async updateSemester(semesterId, semesterData) {
    await Semester.update(semesterData, {
      where: { semesterId: semesterId },
    });
    return this.getSemesterById(semesterId);
  }

  static async deleteSemesterById(semesterId) {
    return Semester.destroy({
      where: { semesterId: semesterId },
    });
  }
}

module.exports = SemesterService;
