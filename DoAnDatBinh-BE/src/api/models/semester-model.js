const { DataTypes } = require('sequelize');
const db = require('../config/Database');


const Semester = db.define('Semester', {
    semesterId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        field: 'semester_id'
    },
    name: {
        type: DataTypes.STRING(50),
        field: 'name'
    },
    schoolYear: {
        type: DataTypes.INTEGER,
        field: "school_year"
    },
    timeStart: {
        type: DataTypes.DATEONLY,
        field: "time_start"
    },
    timeEnd: {
        type: DataTypes.DATEONLY,
        field: "time_end"
    },
    active: DataTypes.BOOLEAN
}, {
    tableName: 'semester',
    timestamps: false
});

module.exports = Semester;
