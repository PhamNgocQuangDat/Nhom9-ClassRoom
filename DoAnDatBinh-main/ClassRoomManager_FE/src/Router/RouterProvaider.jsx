import { Routes, Route } from "react-router-dom";
import Admin from "../Pages/Admin";
import LoginStudent from '../Pages/LoginStudent'
import LoginStaff from "../Pages/LoginStaff";
import LoginTeacher from "../Pages/LoginTeacher";

import HomeStaff from "../Pages/HomeStaff";
import HomeStudent from "../Pages/HomeStudent";



const RouterProvaider = () => {

    return (
      
            <Routes>
                <Route path="/admin-manager/*" element={<Admin />} />
                <Route path="/sinh-vien-dang-nhap" element={<LoginStudent />} />

                <Route path="/giang-vien-dang-nhap" element={<LoginTeacher />} />

                <Route path="/phong-dao-tao-dang-nhap" element={<LoginStaff />} />
                
                <Route path="/trang-chu-sinh-vien" element={<HomeStudent />} />
                <Route path="/trang-chu-giang-vien" element={<HomeStaff />} />
                {/* <Route path="/home" element={<Home />} />
               
                <Route path="/admin-manager/*" element={<Admin />} /> */}
            </Routes>
       
    )
}
export default RouterProvaider