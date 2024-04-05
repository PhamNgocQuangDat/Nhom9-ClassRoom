
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { Button, Input, Space, Table, Row, Col, Modal, Form, notification, Select, DatePicker, Statistic } from 'antd';

import { BiUserCircle } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { BsFiletypeAac } from 'react-icons/bs'
import { BiMoneyWithdraw } from 'react-icons/bi'

const Dashboard = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;
  return (

   <>
  <Row>
  <Col md={6}>
      <div style={{ backgroundColor: '#ffffff', margin: 10 , borderRadius:10, height:250,  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)', textAlign:'center', marginTop:10}}>
            <Statistic style={{ paddingTop:60}} title="Tài khoản" value={10} formatter={formatter}  />
      </div>
      </Col>
      <Col md={6}>
      <div style={{ backgroundColor: '#ffffff', margin: 10 , borderRadius:10, height:250,  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)', textAlign:'center', marginTop:10}}>
            <Statistic style={{ paddingTop:60}} title="Sinh viên" value={112893} formatter={formatter}  />
      </div>
      </Col>
      <Col md={6}>
      <div style={{ backgroundColor: '#ffffff', margin: 10 , borderRadius:10, height:250,  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)', textAlign:'center', marginTop:10}}>
            <Statistic style={{ paddingTop:60}} title="Nhân viên" value={112893} formatter={formatter}  />
      </div>
      </Col>
      <Col md={6}>
      <div style={{ backgroundColor: '#ffffff', margin: 10 , borderRadius:10, height:250,  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)', textAlign:'center', marginTop:10}}>
            <Statistic style={{ paddingTop:60}} title="Tòa nhà" value={112893} formatter={formatter}  />
      </div>
      </Col>
     
    </Row>
    <Row>
    <Col md={6}>
      <div style={{ backgroundColor: '#ffffff', margin: 10 , borderRadius:10, height:250,  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)', textAlign:'center', marginTop:10}}>
            <Statistic style={{ paddingTop:60}} title="Loại phòng" value={112893} formatter={formatter}  />
      </div>
      </Col>
      <Col md={6}>
      <div style={{ backgroundColor: '#ffffff', margin: 10 , borderRadius:10, height:250,  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)', textAlign:'center', marginTop:10}}>
            <Statistic style={{ paddingTop:60}} title="Phòng học" value={112893} formatter={formatter}  />
      </div>
      </Col>
      <Col md={6}>
      <div style={{ backgroundColor: '#ffffff', margin: 10 , borderRadius:10, height:250,  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)', textAlign:'center', marginTop:10}}>
            <Statistic style={{ paddingTop:60}} title="Lớp học" value={112893} formatter={formatter}  />
      </div>
      </Col>
      <Col md={6}>
      <div style={{ backgroundColor: '#ffffff', margin: 10 , borderRadius:10, height:250,  boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.5)', textAlign:'center', marginTop:10}}>
            <Statistic style={{ paddingTop:60}} title="Môn học" value={112893} formatter={formatter}  />
      </div>
      </Col>
     
    </Row>
    
  

    
   

   </>
    
  );
};

export default Dashboard;