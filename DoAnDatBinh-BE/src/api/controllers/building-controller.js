const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const BuildingService = require("../services/building-service");

class BuildingController {
    // user role
    static async getBuildingById(req, res, next) {
        try {
            const building = await BuildingService.getBuildingById(req.params.buildingId);
            if (!building) {
               
                return next(createError.BadRequest(`Không tìm được building với id là ${req.params.buildingId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: building
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllBuilding(req, res, next) {
        try {
            const building = await BuildingService.getAllBuilding();
            if (!building) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: building
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createBuilding(req, res, next) {
        try {
            const newBuilding = await BuildingService.createBuilding(req.body);
            if (!newBuilding) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: newBuilding
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateBuilding(req, res, next) {
        try {

            const {buildingId, ...value} = req.body
            const building = await BuildingService.updateBuilding(buildingId, value);
            if (!building) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: building,
                
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteBuildingById(req, res, next) {
        try {
            console.log(req.params.buildingId)
            
            const building = await BuildingService.deleteBuildingrById(req.params.buildingId);
            if(building <= 0){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    
}

module.exports = BuildingController;
