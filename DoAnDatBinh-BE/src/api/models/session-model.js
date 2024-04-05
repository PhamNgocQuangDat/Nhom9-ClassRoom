const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Course = require('./course-model');
const ClassRoom = require('./class-room-model');
const Lesson = require('./lesson-model');


const Session = db.define('Session', {
    sessionId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        field: 'session_id'
    },
    courseId: {
        type: DataTypes.STRING(20),
        field: "course"
    },
    classRoomId: {
        type: DataTypes.STRING(20),
        field: "class_room"
    },
    lessonStart: {
        type: DataTypes.STRING(20),
        field: "lession_start"
    },
    lessonEnd: {
        type: DataTypes.STRING(20),
        field: "lession_end"
    },
    dayOfWeek: {

        type: DataTypes.INTEGER,
        field: "day_of_week"
    },
    dayChange: {
        type: DataTypes.DATEONLY,
        field: "day_change"
    },
    sessionType: {
        type: DataTypes.STRING(50),
        field: "sesion_type"
    },
    sesionStatus: {
        type: DataTypes.STRING(50),
        field: "session_status"
    },
    active: DataTypes.BOOLEAN
}, {
    tableName: 'session',
    timestamps: false
});

Session.belongsTo(Course, { foreignKey: "courseId", onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Session.belongsTo(ClassRoom, { foreignKey: "classRoomId", onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Session.belongsTo(Lesson, { foreignKey: "lessonStart", onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Session.belongsTo(Lesson, { foreignKey: "lessonEnd", onDelete: 'CASCADE', onUpdate: 'CASCADE' })
module.exports = Session;
