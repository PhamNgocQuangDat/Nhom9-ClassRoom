const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const StudentService = require("../services/student-service");
const AccountService = require('../services/account-service');
const BuildingService = require('../services/building-service');
const ClassRoomService = require('../services/class-room-service');
const CourseService = require('../services/course-service');
const CourseTeacherService = require('../services/course-teacher-service');
const CourseStudentService = require('../services/course-student-service');
const LessonService = require('../services/lesson-service');
const SessionService = require('../services/session-service');
const SubjectService = require('../services/subject-service');

class TestController {
   
    static async testCT(req, res, next) {
        try {
            const acc = await AccountService.getAllAccount();
            const build = await BuildingService.getAllBuilding();
            const cr = await ClassRoomService.getAllClassRoom();
            const course = await CourseService.getAllCourse();
            const c_t = await CourseTeacherService.getAllCourseTeacher();
            const c_s =await CourseStudentService.getAllCourseStudent();
            const l = await LessonService.getAllLesson();
            const s = await SessionService.getAllSession();
            const sub = await SubjectService.getAllSubject();
            return res.status(200).json({
                status: 200,
                message: "done",
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
  
    
}

module.exports = TestController;
