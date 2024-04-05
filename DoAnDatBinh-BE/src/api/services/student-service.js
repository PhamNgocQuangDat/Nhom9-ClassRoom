
const { generateKey } = require('crypto');
const Student = require('../models/student-model');
const { generateId } = require('../helpers/generate-key');
const ClassSchool = require('../models/class-school-model');

class StudentService {
    static async getStudentById(studentId) {
        return Student.findByPk(studentId,{ include: [ { model: ClassSchool }] });
    }
    static async getAllStudent() {
        return Student.findAll({ include: [ { model: ClassSchool }] });
    }
    static async createStudent(studentData) {
        return Student.create(studentData);
    }

    static async updateStudent(studentId, studentData) {
        await Student.update(studentData, {
            where: { studentId: studentId },
        });
        return this.getStudentById(studentId);
    }

    static async deleteStudentById(studentId) {
        return Student.destroy({
            where: { studentId: studentId },
        });
    }
}

module.exports = StudentService;
