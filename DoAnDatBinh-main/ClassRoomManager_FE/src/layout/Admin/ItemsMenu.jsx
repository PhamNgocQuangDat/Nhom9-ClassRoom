import {
  AppstoreOutlined,
  
} from '@ant-design/icons';

import { BiSolidDashboard } from "react-icons/bi";
import { FaRegBuilding } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";
import { LuType } from "react-icons/lu";
import { FaBookDead } from "react-icons/fa";
import { VscSymbolClass } from "react-icons/vsc";
import { FaDiscourse } from "react-icons/fa";
import {  Link } from 'react-router-dom';


const getItem = (label, key, icon, children, type ) => {
  return {
    key,
    icon,
    children, 
    label,
    type,
    
  };
};

// export const items_Service = [
//   getItem('Home', 'home', null, [
//     getItem('Dashboard', 'dashboard', <BiSolidDashboard />, null, null, '/dashboard'),

//   ], 

//   'group', null),

//   getItem('Quản lí', 'grp', null, [
//     getItem('Option 9', '9', <AppstoreOutlined/>, null, null, null),
//     getItem('Option 10', '10', <AppstoreOutlined/>, null, null, null),
//     getItem('Option 11', '11', <AppstoreOutlined/>, null, null, null),
//     getItem('Option 12', '12', <AppstoreOutlined/>,
//         [ getItem('Option 13', '15'),
//           getItem('Option 13', '15')

//         ], null, null

//         ),
//   ], 

//   'group', null),
//   getItem('Thống kê', 'grp', null, [
//     getItem('Option 9', '9', <AppstoreOutlined/>, null, null, null),
//     getItem('Option 10', '10', <AppstoreOutlined/>, null, null, null),
//     getItem('Option 11', '11', <AppstoreOutlined/>, null, null, null),
//     getItem('Option 12', '12', <AppstoreOutlined/>,
//         [ getItem('Option 13', '15'),
//           getItem('Option 13', '15')

//         ], null, null

//         ),
//   ], 

//   'group', null),

// ];


export const Admin_Menu = [
  getItem('Home', 'home', null, [
    getItem(<Link to="dashboard">Dashboard</Link>, 'dashboard', <BiSolidDashboard />, null, null),

  ],

    'group'),

  getItem('Quản lí', 'manager', null, [
    getItem('Người dùng', 'user_manager', <FaUserCircle />, [
      getItem(<Link to="sinh-vien">Sinh viên</Link>, 'student_manager', null, null, null),
      getItem(<Link to="nhan-vien">Nhân viên</Link>, 'staff_manager',null, null, null),
    ], 'sub'),
    getItem(<Link to="toa-nha">Tòa nhà</Link>, 'building_manager', <FaHome />, null, null),
    getItem(<Link to="loai-phong">Loại phòng</Link>, 'typeClassRoom_manager', <LuType />, null, null),
    getItem(<Link to="phong-hoc">Phòng học</Link>, 'classroom_manager', <SiGoogleclassroom />, null, null),
    getItem(<Link to="lop-hoc">Lớp học</Link>, 'class_manager', <VscSymbolClass />, null, null),
    getItem(<Link to="mon-hoc">Môn học</Link>, 'subject_manager', <FaBookDead />, null, null),

    getItem(<Link to="hoc-phan">Học phần</Link>, 'course_manager', <FaDiscourse />, null, null),

  ],

    'group'),


  // getItem('Thống kê', 'grp', null, [
  //   getItem(<Link to="/thongke1">Thốngkê1</Link>, '1statistical', <AppstoreOutlined />, null, null, ),
  //   getItem(<Link to="/thongke2">Thốngkê2</Link>, '2statistical', <AppstoreOutlined />, null, null ),

  // ],

  //   'group', null),

];









