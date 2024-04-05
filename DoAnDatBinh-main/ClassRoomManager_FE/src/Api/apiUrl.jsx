 const BASE_URL = "http://localhost:8080";
 
 export const URL_API={
    Login:{
        login_user: BASE_URL +'/api/sig/user-login-id',
        login_student: BASE_URL +'/api/sig/student-login' ,

        checkInformation : BASE_URL +'/api/account/info'
    },

    TypeClassRoomManager:{
        getList: BASE_URL+'/api/typeClassRooms',
        createTypeClassRoom:BASE_URL+'/api/typeClassRoom',
        updateTypeClassRoom : BASE_URL+'/api/typeClassRoom',
        deleteTypeClassRoom: BASE_URL+'/api/typeClassRoom',
    },
    BuildingManager:{
        getList: BASE_URL+'/api/buildings',
        createBuilding:BASE_URL+'/api/building',
        updateBuilding : BASE_URL+'/api/building',
        deleteBuilding: BASE_URL+'/api/building',
    },
    ClassRoomManager:{
        getList: BASE_URL+'/api/classRooms',
        createClassRoom:BASE_URL+'/api/classRoom',
        updateClassRoom : BASE_URL+'/api/classRoom',
        deleteClassRoom: BASE_URL+'/api/classRoom',
       
    },

    SubjectManager:{
        getList: BASE_URL+'/api/subjects',
        create:BASE_URL+'/api/subject',
        update : BASE_URL+'/api/subject',
        delete: BASE_URL+'/api/subject',
       
    },

    ClassSchoolManager:{
        getList: BASE_URL+'/api/classSchools',
        create:BASE_URL+'/api/classSchool',
        update : BASE_URL+'/api/classSchool',
        delete: BASE_URL+'/api/classSchool',
       
    },

    StudentManager:{
        getList: BASE_URL+'/api/students',
        create:BASE_URL+'/api/student',
        update : BASE_URL+'/api/student',
        delete: BASE_URL+'/api/student',
       
    },

    StaffManager:{
        getList: BASE_URL+'/api/users',
        create:BASE_URL+'/api/user',
        update : BASE_URL+'/api/user',
        delete: BASE_URL+'/api/user',
       
    },

    CourseManager:{
        getList: BASE_URL+'/api/courses',
        create:BASE_URL+'/api/course',
        update : BASE_URL+'/api/course',
        delete: BASE_URL+'/api/course',
       
    },

    SemesterManager:{
        getList: BASE_URL+'/api/semesters',
        create:BASE_URL+'/api/semester',
        update : BASE_URL+'/api/semester',
        delete: BASE_URL+'/api/semester',
       
    },
   
 }