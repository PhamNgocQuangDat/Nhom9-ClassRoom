
const { generateKey } = require('crypto');
const CourseStudent = require('../models/course-student-model');
const { generateId } = require('../helpers/generate-key');

class CourseStudentService {
  static async getCourseStudentById(courseStudentId) {
    return CourseStudent.findByPk(courseStudentId);
  }
  static async getAllCourseStudent() {
    return CourseStudent.findAll();
  }
  static async createCourseStudent(courseStudentData) {
    courseStudentData.courseStudentId = generateId()
    return CourseStudent.create(courseStudentData);
  }
  static async createMultipleCourseStudents(courseStudentDataArray) {
    const generatedIds = courseStudentDataArray.map(data => {
      return { ...data, courseStudentId: generateId() };
    });
    return CourseStudent.bulkCreate(generatedIds);
  }
  static async updateCourseStudent(courseStudentId, courseStudentData) {
    await CourseStudent.update(courseStudentData, {
      where: { courseStudentId: courseStudentId },
    });
    return this.getCourseStudentById(courseStudentId);
  }

  static async deleteCourseStudentById(courseStudentId) {
    return CourseStudent.destroy({
      where: { courseStudentId: courseStudentId },
    });
  }
}

module.exports = CourseStudentService;
