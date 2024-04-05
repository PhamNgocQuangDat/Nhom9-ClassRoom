const { DataTypes } = require('sequelize');
const db = require('../config/Database');


const Subject = db.define('Subject', {
  subjectId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'subject_id'
  },
  name: {
    type: DataTypes.STRING(100),
    field: 'name'
  },
  subjectCode:{
    type: DataTypes.STRING(20),
    field:"subject_code"
  },
  active: DataTypes.BOOLEAN
  
}, {
  tableName: 'subject',
  timestamps: false
});

module.exports = Subject;
