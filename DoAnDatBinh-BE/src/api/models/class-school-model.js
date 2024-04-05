const { DataTypes } = require('sequelize');
const db = require('../config/Database');


const ClassSchool = db.define('ClassSchool', {
    classSchoolId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        field: 'class_school_id'
    },
    name: {
        type: DataTypes.STRING(30),
        field: "name"
    },
    active: DataTypes.BOOLEAN
}, {
    tableName: 'class_school',
    timestamps: false
});


module.exports = ClassSchool;
