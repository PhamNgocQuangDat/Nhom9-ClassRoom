
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import {  useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Row, Col, Modal, Form, notification, Select, DatePicker, Statistic, Card,  } from 'antd';
import { CiCalendarDate } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { FaDiscourse } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { MdOutlineInsertChart } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CheckInformation } from '../Service/LoginService';
const { Search } = Input;

const { Header, Content, Footer } = Layout;

const HomeStudent = () => {
   const navigate = useNavigate()
   const [dataUser , setDataUser] = useState({});



   useEffect(() => {
      loadData();
    }, []);

  const loadData = async () => {
   const token = localStorage.getItem("token")
    try {
      const result = await CheckInformation(token);
      console.log(JSON.stringify(result))
      if (result.status ===200) {
       
         setDataUser(result.data)
      }else{
         navigate("/trang-chu-sinh-vien")
      }
     
    } catch (error) {
         navigate("/sinh-vien-dang-nhap")
    }}
   // const getInformation = async () => {
   //    const token = localStorage.getItem("token")
   //    let result = await  getInformation(token);
   //    console.log(JSON.stringify(result))

   // }

   return (
      <>

         <Layout style={{ backgroundColor: '#e7ecf0' }}>
            <Header
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#ffffff',
                  height: 60,
                  padding: '0 100px',

               }}
            >
               <Row>

                  <img style={{ width: 100 }} src="https://res.cloudinary.com/dps8mwvsi/image/upload/v1710943008/Logo_IUH_x6trib.png" alt="" />
                  <Search
                     placeholder="Tìm kiếm..."
                     
                     style={{
                        width: 400,
                        paddingLeft:20,
                        paddingTop:7
                     }}
                  />
               </Row>
            </Header>


            <Content
               style={{
                  padding: '0 100px',
               }}
            >
               <Row>
                  <Col md={14}>

                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 256, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', marginTop: 10 }}>

                        <Card
                           title="Thông tin sinh viên"
                           bordered={false}
                           style={{
                              width: '100%',
                              height: '100%'
                           }}
                        >

                           <Row>
                              <Col md={6}>
                                 <div style={{ textAlign: 'center' }}>
                                    <img src="https://res.cloudinary.com/dps8mwvsi/image/upload/v1712308264/5850276_upqf3b.png" alt="" style={{ width: 120, border: 1, borderRadius: 10 }} />

                                    <br />
                                    <a href="" >Xem chi tiết</a>
                                 </div>
                              </Col>
                              <Col md={18}>
                                 <table style={{ width: '100%', height: '100%', }}>
                                   <tbody>
                                   <tr>
                                       <th style={{ width: '50%' }}>
                                          <Row>
                                             <p style={{ paddingLeft: 5, margin: 0,  fontSize:13 }}>MSSV: </p>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>{dataUser?.studentId} </p>
                                          </Row>
                                       </th>
                                       <th style={{ width: '50%' }}>
                                          <Row>
                                             <p style={{ paddingLeft: 5, margin: 0,  fontSize:13 }}>Lớp học: </p>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>{dataUser.ClassSchool?.name}</p>
                                          </Row>
                                       </th>
                                    </tr>
                                    <tr>
                                       <th style={{ width: '50%' }}>
                                          <Row>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>Họ tên: </p>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>{dataUser?.name}</p>
                                          </Row>
                                       </th>
                                       <th style={{ width: '50%' }}>
                                          <Row>
                                             <p style={{ paddingLeft: 5, margin: 0,  fontSize:13 }}>Khóa học: </p>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>{dataUser?.classYear}</p>
                                          </Row>
                                       </th>
                                    </tr>
                                    <tr>
                                       <th style={{ width: '50%' }}>
                                          <Row>
                                             <p style={{ paddingLeft: 5, margin: 0,  fontSize:13 }}>Giới tính: </p>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>{dataUser?.gender}</p>
                                          </Row>
                                       </th>
                                       <th style={{ width: '50%' }}>
                                          <Row>
                                             <p style={{ paddingLeft: 5, margin: 0,  fontSize:13 }}>Bậc đào tạo: </p>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>{dataUser?.degree}</p>
                                          </Row>
                                       </th>
                                    </tr>

                                    <tr>
                                       <th style={{ width: '50%' }}>
                                          <Row>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>Ngày sinh: </p>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>{dataUser?.birthDate}</p>
                                          </Row>
                                       </th>
                                       <th style={{ width: '50%' }}>
                                          <Row>
                                             <p style={{ paddingLeft: 5, margin: 0,  fontSize:13 }}>Loại hình đào tạo: </p>
                                             <p style={{ paddingLeft: 5, margin: 0,  fontSize:13 }}>{dataUser?.formalEducation}</p>
                                          </Row>
                                       </th>
                                    </tr>

                                    <tr>
                                       <th style={{ width: '50%' }}>
                                          <Row>
                                             <p style={{ paddingLeft: 5, margin: 0,  fontSize:13 }}>Nơi sinh: </p>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>{dataUser?.placeOfOrigin}</p>
                                          </Row>
                                       </th>
                                       <th style={{ width: '50%' }}>
                                          <Row>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13, }}>Ngành: </p>
                                             <p style={{ paddingLeft: 5, margin: 0 ,  fontSize:13}}>{dataUser?.major}</p>
                                          </Row>
                                       </th>
                                    </tr>

                                   </tbody>




                                 </table>
                              </Col>
                           </Row>

                        </Card>

                     </div>
                  </Col>
                  <Col md={10}>
                     <Col md={24}>
                        <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 115, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', marginTop: 10 }}>
                           <p style={{ paddingTop: 13, paddingLeft: 15 }}>Lời nhắc nhở chưa xem</p>
                           <Row>
                              <Col md={12} style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 15 }}>
                                 0
                              </Col>
                              <Col md={12} style={{ paddingRight: 15 }}>
                                 <div style={{ textAlign: 'right', }}>
                                    <FaRegBell style={{ fontSize: 30 }} />
                                 </div>
                              </Col>
                           </Row>
                           <a style={{ paddingTop: 13, paddingLeft: 15 }} href="">Xem chi tiết</a>
                        </div>
                     </Col>

                     <Row>
                        <Col md={12}>
                           <div style={{ backgroundColor: '#e0fbff', margin: 10, borderRadius: 5, height: 115, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', marginTop: 10 }}>
                              <p style={{ paddingTop: 13, paddingLeft: 15 }}>Lịch học trong tuần</p>
                              <Row>
                                 <Col md={12} style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 15 }}>
                                    0
                                 </Col>
                                 <Col md={12} style={{ paddingRight: 15 }}>
                                    <div style={{ textAlign: 'right', }}>
                                       <FaRegBell style={{ fontSize: 30 }} />
                                    </div>
                                 </Col>
                              </Row>
                              <a style={{ paddingTop: 13, paddingLeft: 15 }} href="">Xem chi tiết</a>
                           </div>
                        </Col>
                        <Col md={12}>
                           <div style={{ backgroundColor: '#fff2d4', margin: 10, borderRadius: 5, height: 115, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', marginTop: 10 }}>
                              <p style={{ paddingTop: 13, paddingLeft: 15 }}>Lịch thi trong tuần</p>
                              <Row>
                                 <Col md={12} style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 15 }}>
                                    0
                                 </Col>
                                 <Col md={12} style={{ paddingRight: 15 }}>
                                    <div style={{ textAlign: 'right', }}>
                                       <FaRegBell style={{ fontSize: 30 }} />
                                    </div>
                                 </Col>
                              </Row>
                              <a style={{ paddingTop: 13, paddingLeft: 15 }} href="">Xem chi tiết</a>
                           </div>
                        </Col>
                     </Row>
                  </Col>


               </Row>

               <Row>
                  <Col md={3}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 140, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <CiCalendarDate style={{ fontSize: 40, marginTop: 15, color: '#66ffff' }} />
                        <p>Lich theo tuần</p>
                     </div>
                  </Col>

                  <Col md={3}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 140, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <FaChartBar style={{ fontSize: 40, marginTop: 15, color: '#66ffff' }} />
                        <p>Kết quả học tập</p>
                     </div>
                  </Col>

                  <Col md={3}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 140, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <FaDiscourse style={{ fontSize: 40, marginTop: 15, color: '#66ffff' }} />
                        <p>Đăng kí học phần</p>
                     </div>
                  </Col>
                  <Col md={3}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 140, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <FaRegMoneyBillAlt style={{ fontSize: 40, marginTop: 15, color: '#66ffff' }} />
                        <p>Tra cứu công nợ</p>
                     </div>
                  </Col>
                  <Col md={3}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 140, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <FaMoneyCheck style={{ fontSize: 40, marginTop: 15, color: '#66ffff' }} />
                        <p>Thanh toán trực tuyến</p>
                     </div>
                  </Col>
                  <Col md={3}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 140, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <MdOutlineInsertChart style={{ fontSize: 40, marginTop: 15, color: '#66ffff' }} />
                        <p>Phiếu thu tổng hợp</p>
                     </div>
                  </Col>
                  <Col md={3}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 140, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <FaCalendar style={{ fontSize: 40, marginTop: 15, color: '#66ffff' }} />
                        <p>Lịch theo tiến độ</p>
                     </div>
                  </Col>
                  <Col md={3}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 140, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <FiShoppingBag style={{ fontSize: 40, marginTop: 15, color: '#66ffff' }} />
                        <p>Nhắc nhở</p>
                     </div>
                  </Col>


               </Row>
               <Row>
                  <Col md={10}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 350, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <Card
                           title="Kết quả học tập"
                           bordered={false}
                           style={{
                              width: '100%',
                              height: '100%'
                           }}
                        >

                        </Card>
                     </div>
                  </Col>

                  <Col md={5}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 350, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <Card
                           title="Tiến độ học tập"
                           bordered={false}
                           style={{
                              width: '100%',
                              height: '100%'
                           }}
                        >

                        </Card>
                     </div>
                  </Col>

                  <Col md={9}>
                     <div style={{ backgroundColor: '#ffffff', margin: 10, borderRadius: 5, height: 350, boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.5)', textAlign: 'center', marginTop: 10 }}>
                        <Card
                           title="Lớp học phần"
                           bordered={false}
                           style={{
                              width: '100%',
                              height: '100%'
                           }}
                        >

                        </Card>
                     </div>
                  </Col>


               </Row>
            </Content>

         </Layout>

      </>
   );
};

export default HomeStudent;