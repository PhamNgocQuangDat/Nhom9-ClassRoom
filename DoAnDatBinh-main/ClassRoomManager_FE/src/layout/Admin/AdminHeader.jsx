
import React, { useState, useContext } from 'react';
import { Layout , Button, Switch, Avatar, Badge, Space, Divider, Row, Col, Drawer, Image } from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    BellOutlined
} from '@ant-design/icons';

import { GrLanguage } from "react-icons/gr";
import { TfiAlignCenter } from "react-icons/tfi";
import {AdminContext} from '../../Context/AdminContext'

const { Header, Content, Footer } = Layout;

const AdminHeader = () => {

    const value = useContext(AdminContext)

    return (
            <Header
                style={{
                    padding: 0,
                    background: '#ffffff',
                }}

            >
                <Row >
                    <Col md={2}>
                        <Space>
                            <Button
                                type="text"
                                icon={value.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => value.setCollapsed(!value.collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />

                        </Space>
                    </Col>


                    <Col md={22} style={{textAlign:'right'}}>
                        <Space size={0}>
                            <Space size={10}>
                                <Badge count={1} style={{ fontSize: 10 }}>
                                    <Avatar style={{ backgroundColor: '#d92550' }} shape="circle" size="large" icon={<BellOutlined />} />
                                </Badge>

                                <Badge style={{ fontSize: 10 }}>
                                    <Avatar style={{ backgroundColor: '#808080' }} shape="circle" size="large" icon={<GrLanguage style={{ color: '#00ffff', marginTop: 7 }} />} />
                                </Badge>
                            </Space>
                            <Divider type="vertical" />

                            <Badge dot>
                                <Avatar shape="circle" size="large" icon={<UserOutlined />} />
                            </Badge>
                            <Divider type="vertical" />

                            <Button
                                type="text"
                                icon={<TfiAlignCenter size={16} />}
                                style={{
                                    width: 64,
                                    height: 64,
                                    marginRight: 10
                                }}
                                onClick={value.showDrawer}
                            />
                        </Space>
                    </Col>
                </Row>

                <Drawer title="Settings" placement="right" onClose={value.onClose} open={value.open} theme={value.theme}>
                    <h3>Theme Option</h3>
                    <Switch
                        checked={value.theme === 'dark'}
                        onChange={value.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                    <br />
                    <h3>Menu Option</h3>
                    <Switch onChange={value.changeMode} 
                        // checked={value.changeMode === 'vertical'}
                     checkedChildren="Vertical"
                     unCheckedChildren="Inline"
                    /> 
                </Drawer>
            </Header>
    );
};

export default AdminHeader;
