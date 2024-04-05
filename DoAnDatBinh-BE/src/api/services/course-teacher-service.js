
const { generateKey } = require('crypto');
const CourseTeacher = require('../models/course-teacher-model');
const { generateId } = require('../helpers/generate-key');

class CourseTeacherService {
  static async getCourseTeacherById(courseTeacherId) {
    return CourseTeacher.findByPk(courseTeacherId);
  }
  static async getAllCourseTeacher() {
    return CourseTeacher.findAll();
  }
  static async createCourseTeacher(courseTeacherData) {
    courseTeacherData.courseTeacherId = generateId()
    return CourseTeacher.create(courseTeacherData);
  }

  static async updateCourseTeacher(courseTeacherId, courseTeacherData) {
    await CourseTeacher.update(courseTeacherData, {
      where: { courseTeacherId: courseTeacherId },
    });
    return this.getCourseTeacherById(courseTeacherId);
  }

  static async deleteCourseTeacherById(courseTeacherId) {
    return CourseTeacher.destroy({
      where: { courseTeacherId: courseTeacherId },
    });
  }
}

module.exports = CourseTeacherService;
