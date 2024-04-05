
const { generateKey } = require('crypto');
const Course = require('../models/course-model');
const { generateId } = require('../helpers/generate-key');
const Subject = require('../models/subject-model');
const Semester = require('../models/semester-model');
const ClassSchool = require('../models/class-school-model');

class CourseService {
  static async getCourseById(courseId) {
    return Course.findByPk(courseId, { include: [{ model: Subject }, { model: Semester }, { model: ClassSchool }] });
  }
  static async getAllCourse() {
    return Course.findAll({ include: [ { model: Subject }, { model: Semester }, { model: ClassSchool }] });
  }
  static async createCourse(courseData) {
    courseData.courseId = generateId()
    return Course.create(courseData);
  }

  static async updateCourse(courseId, courseData) {
    await Course.update(courseData, {
      where: { courseId: courseId },
    });
    return this.getCourseById(courseId);
  }

  static async deleteCourseById(courseId) {
    return Course.destroy({
      where: { courseId: courseId },
    });
  }
}

module.exports = CourseService;
