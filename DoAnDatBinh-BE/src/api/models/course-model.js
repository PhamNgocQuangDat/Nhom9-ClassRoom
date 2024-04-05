const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Subject = require('./subject-model');
const User = require('./user-model');
const Semester = require('./semester-model');
const ClassSchool = require('./class-school-model');


const Course = db.define('Course', {
  courseId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'course_id'
  },
  name: {
    type: DataTypes.STRING(50),
    field: 'name'
  }, 
  subjectId:{
    type: DataTypes.STRING(20),
    field:"subject"
  },
  semesterId:{
    type:DataTypes.STRING(20),
    field:"semester"
  },
  classSchoolId:{
    type:DataTypes.STRING(20),
    field:"class-school"
  },
  active: DataTypes.BOOLEAN
}, {
  tableName: 'course',
  timestamps: false
});
Course.belongsTo(Subject, { foreignKey: 'subjectId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Course.belongsTo(Semester, { foreignKey: 'semesterId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Course.belongsTo(ClassSchool, { foreignKey: 'classSchoolId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })

module.exports = Course;
