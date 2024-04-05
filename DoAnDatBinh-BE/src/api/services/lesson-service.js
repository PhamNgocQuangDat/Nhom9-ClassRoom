
const { generateKey } = require('crypto');
const Lesson = require('../models/lesson-model');
const { generateId } = require('../helpers/generate-key');

class LessonService {
  static async getLessonById(lessonId) {
    return Lesson.findByPk(lessonId);
  }
  static async getAllLesson() {
    return Lesson.findAll();
  }
  static async createLesson(lessonData) {
    lessonData.lessonId = generateId()
    return Lesson.create(lessonData);
  }
  static async createMultipleLessons(lessonDataArray) {
    const generatedIds = lessonDataArray.map(data => {
      return { ...data, lessonId: generateId() };
    });
    return Lesson.bulkCreate(generatedIds);
  }
  static async updateLesson(lessonId, lessonData) {
    await Lesson.update(lessonData, {
      where: { lessonId: lessonId },
    });
    return this.getLessonById(lessonId);
  }

  static async deleteLessonById(lessonId) {
    return Lesson.destroy({
      where: { lessonId: lessonId },
    });
  }
}

module.exports = LessonService;
