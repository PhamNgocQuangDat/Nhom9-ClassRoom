const { DataTypes } = require('sequelize');
const db = require('../config/Database');


const Lesson = db.define('Lesson', {
  lessonId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'lesson_id'
  },
  name: {
    type: DataTypes.STRING(50),
    field: 'name'
  },
  timeStart:{
   type: DataTypes.TIME,
   field:"time_start"
  },
  timeEnd:{
    type: DataTypes.TIME,
    field:"time_end"
  },
  active: DataTypes.BOOLEAN
}, {
  tableName: 'lesson',
  timestamps: false
});

module.exports = Lesson;
