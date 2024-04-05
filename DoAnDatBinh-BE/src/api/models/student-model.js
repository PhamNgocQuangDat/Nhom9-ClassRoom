const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const ClassSchool = require('./class-school-model');


const Student = db.define('Student', {
  studentId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'student_id'
  },
  name: {
    type: DataTypes.STRING(50),
    field: 'name'
  },
  gender: DataTypes.STRING(7),
  birthDate: {
    type: DataTypes.DATEONLY,
    field: 'birth_date'
  },
  placeOfOrigin: {
    type: DataTypes.STRING(100),
    field: 'place_of_origin'
  },
  classSchoolId: {
    type: DataTypes.STRING(20),
    field: 'class_school'
  },
  classYear: {
    type: DataTypes.STRING(20),
    field: 'last_year'
  },
  degree: DataTypes.STRING(50),
  formalEducation: {
    type: DataTypes.STRING(50),
    field: 'formal_education'
  },
  major: DataTypes.STRING(50),
  active: DataTypes.BOOLEAN
  
}, {
  tableName: 'student',
  timestamps: false
});
Student.belongsTo(ClassSchool, { foreignKey: 'classSchoolId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
module.exports = Student;
