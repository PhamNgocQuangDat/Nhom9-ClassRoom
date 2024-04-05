
import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Footer } = Layout;

const AdminFooter = () => {

  return (
    <Footer
      style={{
        textAlign: 'center',
        minheight: '10vh',
        background: '#ffffff',
      }}
    >
   IUH-Trường Đại Học Công Nghiệp Thành Phố Hồ Chí Minh
    </Footer>
  );
};

export default AdminFooter;