
import React from 'react';
import {Layout } from 'antd';
import Admin_Header from '../layout/Admin/AdminHeader';
import Admin_Content from '../layout/Admin/AdminContent';
import Admin_Footer from '../layout/Admin/AdminFooter';
import  AdminMenu  from '../layout/Admin/AdminMenu';

const Admin = () => {
   
    return (
        <>
        <Layout>
            <AdminMenu/>
            <Layout>
                <Admin_Header />
                <Admin_Content />
                <Admin_Footer />
            </Layout>
        </Layout>
        </>
      
    );
};

export default Admin;