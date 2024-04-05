const { DataTypes } = require('sequelize');
const db = require('../config/Database');
const Building = require('./building-model')
const TypeClassRoom = require('./type-class-room-model')

const ClassRoom = db.define('ClassRoom', {
    classRoomId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        field: 'class_room_id'
    },
    classRoomName: {
        type: DataTypes.STRING(50),
        field: 'class_room_name'
    },
    buildingId: {
        type: DataTypes.STRING(20),
        field: 'building'
    },
    typeClassRoomId: {
        type: DataTypes.STRING(20),
        field: 'type_class_room'
    },
 
    active: DataTypes.BOOLEAN
}, {
    tableName: 'class_room',
    timestamps: false
});

ClassRoom.belongsTo(Building, { foreignKey: 'buildingId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
ClassRoom.belongsTo(TypeClassRoom, { foreignKey: 'typeClassRoomId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
module.exports = ClassRoom;