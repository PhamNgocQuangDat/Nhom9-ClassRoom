const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const User = require('./user-model');
const Student = require('./student-model');

const Account = db.define('Account', {
  accountId: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    field: 'account_id'
  },
  userId:{
    type: DataTypes.STRING(20),
    field: 'user_id'
  } ,
  studentId:{
    type: DataTypes.STRING(20),
    field: 'student_id'
  } ,
  password: DataTypes.TEXT,
 
},{
  tableName: 'account',
  timestamps: false
});

Account.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Account.belongsTo(Student, { foreignKey: 'studentId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Account;
