const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const SubjectService = require("../services/subject-service");

class SubjectController {
  // user role
  static async getSubjectById(req, res, next) {
    try {
      const Subject = await SubjectService.getSubjectById(req.params.subjectId);
      if (!Subject) {

        return next(createError.BadRequest(`Không tìm được Subject với id là ${req.params.subjectId}`))
      }
      return res.status(200).json({
        status: 200,
        message: "done",
        data: Subject
      })
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getAllSubject(req, res, next) {
    try {
      const Subjects = await SubjectService.getAllSubject();
      if (!Subjects) {
        return next(createError.InternalServerError());
      }
      return res.status(200).json({
        status: 200,
        message: "done",
        data: Subjects
      })
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async createSubject(req, res, next) {
    try {
      const subject = await SubjectService.createSubject(req.body);
      if (!subject) {
        return next(createError.InternalServerError());
      }
      return res.status(200).json({
        status: 200,
        message: "done",
        data: subject
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async updateSubject(req, res, next) {
    try {

      const { subjectId, ...value } = req.body
      const Subject = await SubjectService.updateSubject(subjectId, value);
      if (!Subject) {
        return next(createError.InternalServerError());
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
        data: Subject,

      })
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async deleteSubjectById(req, res, next) {
    try {

      const Subject = await SubjectService.deleteSubjectById(req.params.subjectId);
      if (Subject <= 0) {
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

module.exports = SubjectController;
