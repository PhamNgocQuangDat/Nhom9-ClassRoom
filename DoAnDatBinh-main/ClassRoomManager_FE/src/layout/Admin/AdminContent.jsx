
import React from 'react';
import {Layout } from 'antd';


import Dashboard from '../../Components/Dashboard/Dashboard';

import ClassRoomTable from '../../Components/ClassRoom/ClassRoomTable'

import { Route, Routes} from 'react-router-dom';
import BuildingTable from '../../Components/Building/BuildingTable';
import TypeClassRoomTable from '../../Components/TypeClassRoom/TypeClassRoomTable';
import SubjectTable from '../../Components/Subject/SubjectTable';
import StudentTable from '../../Components/Student/StudentTable';

import ClassSchoolTable from '../../Components/ClassSchool/ClassSchoolTable';
import StaffTable from '../../Components/Staff/StaffTable';
import CoursesTable from '../../Components/Course/CoursesTable';

const { Content } = Layout;

const AdminContent = () => {

    return (
        <Content
            style={{
                margin: '8px 8px',
                padding: '10px 10px 10px 10px', // top right bottom left
                maxHeight: '80vh',
                background: '#ffffff',
                overflowY: 'auto',
                overflowX: 'auto',
                // height: 'auto',
            }}

        >
            <Routes>
                <Route path='' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/sinh-vien' element={< StudentTable />} />
                <Route path='/nhan-vien' element={< StaffTable />} />
                <Route path='/toa-nha' element={< BuildingTable />} />
                <Route path='/loai-phong' element={< TypeClassRoomTable />} />
                <Route path='/phong-hoc' element={< ClassRoomTable />} />
                <Route path='/lop-hoc' element={< ClassSchoolTable />} />
                <Route path='/mon-hoc' element={< SubjectTable />} />

                <Route path='/hoc-phan' element={< CoursesTable />} />
            </Routes>


        </Content>
    );
};

export default AdminContent;