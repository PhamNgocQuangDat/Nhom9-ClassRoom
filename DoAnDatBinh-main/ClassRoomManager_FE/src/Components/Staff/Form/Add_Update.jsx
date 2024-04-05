
import React, { Fragment, useState, useEffect } from "react";
import { Button, Input, Space, Table, Row, Col, Modal, Form, notification, Select, DatePicker, Checkbox } from 'antd';
import { createBuilding, getBuildings, updateBuilding } from "../../../Service/BuildingService";
import { getTypeClassRooms } from "../../../Service/TypeClassRoomService";
import { createClassRoom, updateClassRoom } from "../../../Service/ClassRoomService";
import { getClassSchools } from "../../../Service/ClassSchoolService";
import messageHandler from '../../../utils/MessageHandler';
import { createStudent, updateStudent } from "../../../Service/StudentService";


import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import moment from "moment";
import { createStaff, updateStaff } from "../../../Service/StaffService";

const Add_Update = (props) => {

  dayjs.extend(customParseFormat);
  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY/MM/DD';
  const weekFormat = 'MM/DD';
  const monthFormat = 'YYYY/MM';

  /** Manually entering any of the following formats will perform date parsing */
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
  const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
  const customWeekStartEndFormat = (value) =>
    `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
      .endOf('week')
      .format(weekFormat)}`;

  const onChangeNgayDuKien = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChangeNgayBatDau = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const onOkNgayBatDau = (value) => {
    console.log('onOk: ', value);
  };

  const onChangeNgayKetThuc = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const onOkNgayKetThuc = (value) => {
    console.log('onOk: ', value);
  };


  const [form] = Form.useForm();
  const { isOpenModel, data, closeModelAddUpdate, onFinishUpdate } = props;
  const [itemUpdate, setItemUpdate] = useState({});

  const provinces = [
    { value: "Tỉnh Hà Giang", label: "Tỉnh Hà Giang" },
    { value: "Tỉnh Tuyên Quang", label: "Tỉnh Tuyên Quang" },
    { value: "Tỉnh Lào Cai", label: "Tỉnh Lào Cai" },
    { value: "Tỉnh Điện Biên", label: "Tỉnh Điện Biên" },
    { value: "Tỉnh Lai Châu", label: "Tỉnh Lai Châu" },
    { value: "Tỉnh Sơn La", label: "Tỉnh Sơn La" },
    { value: "Tỉnh Yên Bái", label: "Tỉnh Yên Bái" },
    { value: "Tỉnh Hòa Bình", label: "Tỉnh Hòa Bình" },
    { value: "Tỉnh Thái Nguyên", label: "Tỉnh Thái Nguyên" },
    { value: "Tỉnh Bắc Giang", label: "Tỉnh Bắc Giang" },
    { value: "Tỉnh Lạng Sơn", label: "Tỉnh Lạng Sơn" },
    { value: "Tỉnh Quảng Ninh", label: "Tỉnh Quảng Ninh" },
    { value: "Tỉnh Hải Dương", label: "Tỉnh Hải Dương" },
    { value: "Tỉnh Hưng Yên", label: "Tỉnh Hưng Yên" },
    { value: "Tỉnh Thanh Hóa", label: "Tỉnh Thanh Hóa" },
    { value: "Tỉnh Nghệ An", label: "Tỉnh Nghệ An" },
    { value: "Tỉnh Hà Tĩnh", label: "Tỉnh Hà Tĩnh" },
    { value: "Tỉnh Quảng Bình", label: "Tỉnh Quảng Bình" },
    { value: "Tỉnh Quảng Trị", label: "Tỉnh Quảng Trị" },
    { value: "Tỉnh Thừa Thiên Huế", label: "Tỉnh Thừa Thiên Huế" },
    { value: "Tỉnh Quảng Nam", label: "Tỉnh Quảng Nam" },
    { value: "Tỉnh Quảng Ngãi", label: "Tỉnh Quảng Ngãi" },
    { value: "Tỉnh Bình Định", label: "Tỉnh Bình Định" },
    { value: "Tỉnh Phú Yên", label: "Tỉnh Phú Yên" },
    { value: "Tỉnh Khánh Hòa", label: "Tỉnh Khánh Hòa" },
    { value: "Tỉnh Ninh Thuận", label: "Tỉnh Ninh Thuận" },
    { value: "Tỉnh Bình Thuận", label: "Tỉnh Bình Thuận" },
    { value: "Tỉnh Kon Tum", label: "Tỉnh Kon Tum" },
    { value: "Tỉnh Gia Lai", label: "Tỉnh Gia Lai" },
    { value: "Tỉnh Đắk Lắk", label: "Tỉnh Đắk Lắk" },
    { value: "Tỉnh Đắk Nông", label: "Tỉnh Đắk Nông" },
    { value: "Tỉnh Lâm Đồng", label: "Tỉnh Lâm Đồng" },
    { value: "Tỉnh Bình Phước", label: "Tỉnh Bình Phước" },
    { value: "Tỉnh Tây Ninh", label: "Tỉnh Tây Ninh" },
    { value: "Tỉnh Bình Dương", label: "Tỉnh Bình Dương" },
    { value: "Thành phố Hồ Chí Minh", label: "Thành phố Hồ Chí Minh" },
    { value: "Tỉnh Bà Rịa - Vũng Tàu", label: "Tỉnh Bà Rịa - Vũng Tàu" },
    { value: "Tỉnh Long An", label: "Tỉnh Long An" },
    { value: "Tỉnh Đồng Tháp", label: "Tỉnh Đồng Tháp" },
    { value: "Tỉnh Tiền Giang", label: "Tỉnh Tiền Giang" },
    { value: "Tỉnh Bến Tre", label: "Tỉnh Bến Tre" },
    { value: "Thành phố Cần Thơ", label: "Thành phố Cần Thơ" },
    { value: "Tỉnh Vĩnh Long", label: "Tỉnh Vĩnh Long" },
    { value: "Tỉnh Trà Vinh", label: "Tỉnh Trà Vinh" },
    { value: "Tỉnh Sóc Trăng", label: "Tỉnh Sóc Trăng" },
    { value: "Tỉnh Bạc Liêu", label: "Tỉnh Bạc Liêu" },
    { value: "Tỉnh Cà Mau", label: "Tỉnh Cà Mau" }
  ];
  const majors = [
    { value: "Kĩ thuật phần mềm-CLC", label: "Kĩ thuật phần mềm-CLC" },
    { value: "Khoa học máy tính-CLC", label: "Khoa học máy tính-CLC" },
    { value: "Công nghệ thông tin-CLC", label: "Công nghệ thông tin-CLC" },
    { value: "Hệ thống thông tin-CLC", label: "Hệ thống thông tin-CLC" },

  ];

  useEffect(() => {
    // Set lại giá trị của các trường form khi updateItem thay đổi
    form.resetFields();
    setItemUpdate(data)
  }, [data]);


 

  const onFinishFailed = errorInfo => { };

  const onFinish = async (dataForm) => {
    let dataSubmit = { ...itemUpdate, ...dataForm, status: dataForm.status ? 1 : 0 };
    //  console.log('data submit', dataSubmit)
    let isAdd = itemUpdate.userId === '' ? true : false;
    let result = null;
    try {
      if (isAdd) {
        result = await createStaff(dataSubmit);
      } else {
        result = await updateStaff(dataSubmit);
      }

      if (result.status === 201 || result.status === 200) {
        messageHandler.success(isAdd ? 'Thêm nhân viên thành công' : 'Cập nhật nhân viên thành công');
        onFinishUpdate(isAdd, result.data.data);
        closeModelAddUpdate();
      }


    } catch (error) {

      messageHandler.error('Lỗi hệ thống');
    }




  };


  return (
    <div>

      <Modal
        forceRender  // cần tìm hiểu
        title={itemUpdate?.userId === '' ? "Thêm nhân viên" : "Cập nhật nhân viên"}
        open={isOpenModel}
        onCancel={closeModelAddUpdate}
        okText="Lưu"
        cancelText="Đóng"
        width={800}
        onOk={() => form.submit()}
        style={{ top: 5 }}
      >

        <Fragment>
          <Form
            layout="vertical"
            form={form}

            onFinish={onFinish}
            onFinishFailed={onFinishFailed}

          >

            <Row>

              <Col md={12}>
                <Form.Item
                  label="Mã nhân viên:"
                  rules={[{ required: true, message: 'Phải nhập mã nhân viên' }]}
                  name="userId"

                  initialValue={data?.userId}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập mã nhân viên" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              <Col md={12}>
                <Form.Item
                  label="Email:"
                  rules={[{ required: true, message: 'Phải nhập email' }]}
                  name="email"

                  initialValue={data?.email}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập email nhân viên" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

            </Row>

            <Row>
            <Col md={12}>
                <Form.Item
                  label="Tên nhân viên:"
                  rules={[{ required: true, message: 'Phải nhập tên nhân viên' }]}
                  name="name"

                  initialValue={data?.name}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập tên nhân viên" style={{ width: '100%' }} />
                </Form.Item>
              </Col>


              <Col md={12}>
                <Form.Item
                  label="Giới tính:"
                  rules={[{ required: true, message: 'Phải chọn giới tính' }]}
                  name="gender"
                  initialValue={data?.gender}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Select style={{ width: '100%' }}
                    showSearch
                    placeholder="Nhập để tìm kiếm giới tính..."
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }

                    options={[{ value: "Nam", label: "Nam" }, { value: "Nữ", label: "Nữ" }]}
                  // onChange={handleSelectDaiLyChange}
                  />
                </Form.Item>
              </Col>

           
            </Row>

            <Row>
            <Col md={12}>
                <Form.Item
                  label="Ngày sinh:"

                  name="birthDate"

                  initialValue={itemUpdate?.birthDate ? moment(itemUpdate.birthDate) : moment()}
                  rules={[{ required: true, message: 'Phải nhập ngày sinh' }]}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <DatePicker onChange={onChangeNgayDuKien} style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              <Col md={12}>
                <Form.Item
                  label="Quê quán:"
                  rules={[{ required: true, message: 'Phải chọn quê quán' }]}
                  name="placeOfOrigin"
                  initialValue={data?.placeOfOrigin}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Select style={{ width: '100%' }}
                    showSearch
                    placeholder="Nhập để tìm kiếm quê quán..."
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }

                    options={provinces}
                  // onChange={handleSelectDaiLyChange}
                  />
                </Form.Item>
              </Col>

              
            </Row>

            <Row>

             

              <Col md={12}>
                <Form.Item
                  label="Chức vụ:"
                  rules={[{ required: true, message: 'Phải chọn chức vụ' }]}
                  name="role"
                  initialValue={data?.role}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Select style={{ width: '100%' }}
                    showSearch
                    placeholder="Nhập để tìm kiếm bậc đào tạo..."
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }

                    options={[{ value: "GiangVien", label: "Giảng viên" }, { value: "PhongDaoTao", label: "Phòng đào tạo" }]}
                  // onChange={handleSelectDaiLyChange}
                  />
                </Form.Item>
              </Col>

              <Col md={12}>
                <Form.Item
                  label="Hoạt động"
                  valuePropName="checked"
                  initialValue={data?.active}
              
                  name="active"
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                  >
                  <Checkbox defaultChecked={data?.active} />
                </Form.Item>
              </Col>

            </Row>

     
           
          </Form>
        </Fragment>
      </Modal>
    </div>
  );
};

export default Add_Update; 