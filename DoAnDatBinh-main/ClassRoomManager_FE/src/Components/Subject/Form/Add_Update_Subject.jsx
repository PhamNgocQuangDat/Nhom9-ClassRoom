
import React, { Fragment, useState, useEffect } from "react";
import { Button, Input, Space, Table, Row, Col, Modal, Form, notification, Select, DatePicker } from 'antd';

import { getTypeClassRooms } from "../../../Service/TypeClassRoomService";
import { createClassRoom, updateClassRoom } from "../../../Service/ClassRoomService";

import messageHandler from '../../../utils/MessageHandler';
import { createSubject, updateSubject } from "../../../Service/SubjectService";


const Add_Update_Subject = (props) => {




  const [form] = Form.useForm();
  const { isOpenModel, subjectItem, closeModelAddUpdate, onFinishUpdate } = props;
  const [itemUpdate, setItemUpdate] = useState({});



  useEffect(() => {
    // Set lại giá trị của các trường form khi updateItem thay đổi
    form.resetFields();
    setItemUpdate(subjectItem)
  }, [subjectItem]);



  const onFinishFailed = errorInfo => { };

  const onFinish = async (dataForm) => {
    let dataSubmit = { ...itemUpdate, ...dataForm, status: dataForm.status ? 1 : 0 };
    //  console.log('data submit', dataSubmit)
    let isAdd = subjectItem.subjectId === '' ? true : false;
    let result = null;
    try {
      if (isAdd) {
        result = await createSubject(dataSubmit);
      } else {
        result = await updateSubject(dataSubmit);
      }

      if (result.status === 201 || result.status === 200) {
        messageHandler.success(isAdd ? 'Thêm môn học thành công' : 'Cập nhật môn học thành công');
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
        title={subjectItem?.subjectId === '' ? "Thêm môn học" : "Cập nhật môn học"}
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
                  label=" Mã môn học:"
                  rules={[{ required: true, message: 'Phải nhập mã môn học' }]}
                  name="subjectCode"
                  initialValue={subjectItem?.subjectCode}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập mã môn học" style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col md={12}>
                <Form.Item
                  label=" Tên môn học:"
                  rules={[{ required: true, message: 'Phải nhập tên môn học' }]}
                  name="name"
                  initialValue={subjectItem?.name}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập tên môn học" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

             

            </Row>

           
          </Form>
        </Fragment>
      </Modal>
    </div>
  );
};

export default Add_Update_Subject; 