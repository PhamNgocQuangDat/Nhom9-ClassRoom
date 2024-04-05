
const { generateKey } = require('crypto');
const Building = require('../models/building-model');
const { generateId } = require('../helpers/generate-key');

class BuildingService {
  static async getBuildingById(buildingId) {
    return Building.findByPk(buildingId);
  }
  static async getAllBuilding() {
    return Building.findAll();
  }
  static async createBuilding(buildingData) {
    buildingData.buildingId = generateId()
    return Building.create(buildingData);
  }

  static async updateBuilding(buildingId, buildingData) {
    await Building.update(buildingData, {
      where: { buildingId: buildingId },
    });
    return this.getBuildingById(buildingId);
  }

  static async deleteBuildingrById(buildingId) {
    return Building.destroy({
      where: { buildingId: buildingId },
    });
  }
}

module.exports = BuildingService;
