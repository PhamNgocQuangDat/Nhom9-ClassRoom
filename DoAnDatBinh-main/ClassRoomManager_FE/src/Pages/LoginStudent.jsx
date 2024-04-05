import { Button, Checkbox, Form, Input, Divider } from 'antd';
import React from 'react';
import { useState } from 'react';
import '../Assets/Css/Login.css'; // Import CSS file here

import {  useNavigate } from "react-router-dom";
import messageHandler from '../utils/MessageHandler';
import { login_Student } from '../Service/LoginService';
const LoginStudent = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({studentId :"", password:""})

    const onFinish = (values) => {
        LoginAction()
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
   

    const LoginAction = async() => {
        let result = await login_Student(data)
        console.log(JSON.stringify(result))
       if (result!==null) {
        if (result.status===200) {
           
             localStorage.setItem("token", result.data.token)
             if (result.data.role ==='SinhVien') {
                  navigate("/trang-chu-sinh-vien")
             }
        }else{
            messageHandler.error("Lỗi")
        }
       }
       else{
        messageHandler.error("Sai thông tin đăng nhập")
       }
        
    }

    return (
        <div className="login">
            <div style={{ textAlign: 'center' }}>
                <img style={{ width: 100, }} src='https://res.cloudinary.com/dps8mwvsi/image/upload/v1710943008/Logo_IUH_x6trib.png' alt="" />
            </div>
            <div>
                <h1>Đăng nhập</h1>
            </div>

            <Form
                style={{marginTop:30}}
                name="basic"
                // labelCol={{
                //     span: 8,
                // }}
                // wrapperCol={{
                //     span: 16,
                // }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <label htmlFor="">
                Mã sinh viên:
                </label>
                <Form.Item
                    // label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập username!',
                        },
                    ]}

                    onChange={(e) => {
                        setData((prev) => {
                          return {
                            ...prev,
                            studentId: e.target.value,
                          };
                        });
                      }}
                >
                    <Input />
                </Form.Item>

                
                <label htmlFor="">
                    Mật khẩu:
                </label>

                <Form.Item
                    // label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập mật khẩu!',
                        },
                    ]}

                    onChange={(e) => {
                        setData((prev) => {
                          return {
                            ...prev,
                            password: e.target.value,
                          };
                        });
                      }}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 1,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 9,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>

            <Divider/>

            <div style={{textAlign:'center'}}>
            <p>Quên mật khẩu</p>
            </div>



        </div>
    );
};

export default LoginStudent;
