const { DataTypes } = require('sequelize');
const db = require('../config/Database');

const Building = db.define('Building', {
    buildingId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        field: 'building_id'
    },
    buildingName: {
        type: DataTypes.STRING(50),
        field: 'building_name'
    },
    active: DataTypes.BOOLEAN
}, {
    tableName: 'building',
    timestamps: false
});

module.exports = Building;