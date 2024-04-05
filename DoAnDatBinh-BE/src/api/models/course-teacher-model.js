const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Course = require('./course-model');
const Teacher = require('./user-model');


const CourseTeacher = db.define('CourseTeacher', {
    courseTeacherId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        field: 'course_Teacher_id'
    },
    courseId: {
        type: DataTypes.STRING(20),
        field: "course"
    },
    teacherId: {
        type: DataTypes.STRING(20),
        field: "teacher"
    },
    active: DataTypes.BOOLEAN
}, {
    tableName: 'course_teacher',
    timestamps: false
});
CourseTeacher.belongsTo(Course, { foreignKey: 'courseId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
CourseTeacher.belongsTo(Teacher, { foreignKey: 'teacherId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })

module.exports = CourseTeacher;
