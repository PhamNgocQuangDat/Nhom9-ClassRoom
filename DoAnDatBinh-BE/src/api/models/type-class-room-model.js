const { DataTypes } = require('sequelize');
const db = require('../config/Database');

const TypeClassRoom = db.define('TypeClassRoom', {
    typeClassRoomId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        field: 'type_class_room_id'
    },
    typeClassRoomName: {
        type: DataTypes.STRING(50),
        field: 'type_class_room_name'
    },   quantityMax: {
        type: DataTypes.INTEGER,
        field: 'quantity-max'
    },
    active: DataTypes.BOOLEAN
}, {
    tableName: 'type_class_room',
    timestamps: false
});

module.exports = TypeClassRoom;