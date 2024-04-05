const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Subject = require('./subject-model');
const User = require('./user-model');
const Course = require('./course-model');
const Student = require('./student-model');


const CourseStudent = db.define('CourseStudent', {
    courseStudentId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        field: 'course_student_id'
    },
    courseId: {
        type: DataTypes.STRING(20),
        field: "course"
    },
    studentId: {
        type: DataTypes.STRING(20),
        field: "student"
    },
    active: DataTypes.BOOLEAN
}, {
    tableName: 'course_student',
    timestamps: false
});
CourseStudent.belongsTo(Course, { foreignKey: 'courseId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
CourseStudent.belongsTo(Student, { foreignKey: 'studentId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })

module.exports = CourseStudent;
