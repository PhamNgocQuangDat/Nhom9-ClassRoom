
import React, { Fragment, useState, useEffect } from "react";
import { Button, Input, Space, Table, Row, Col, Modal, Form, notification, Select, DatePicker } from 'antd';
import { createBuilding, getBuildings , updateBuilding} from "../../../Service/BuildingService";
import { getTypeClassRooms } from "../../../Service/TypeClassRoomService";
import { createClassRoom, updateClassRoom } from "../../../Service/ClassRoomService";

import messageHandler from '../../../utils/MessageHandler';
import { createClassSchool, updateClassSchool } from "../../../Service/ClassSchoolService";


const Add_Update_ClassSchool = (props) => {




  const [form] = Form.useForm();
  const { isOpenModel, updateItem, closeModelAddUpdate, onFinishUpdate } = props;
  const [itemUpdate, setItemUpdate] = useState({});



  useEffect(() => {
    // Set lại giá trị của các trường form khi updateItem thay đổi
    form.resetFields();
    setItemUpdate(updateItem)
  }, [updateItem]);

  

  const onFinishFailed = errorInfo => { };

  const onFinish = async (dataForm) => {
    let dataSubmit = { ...itemUpdate, ...dataForm, status: dataForm.status ? 1 : 0 };
    //  console.log('data submit', dataSubmit)
    let isAdd = updateItem.classSchoolId === '' ? true : false;
    let result = null;
    try {
      if (isAdd) {
        result = await createClassSchool(dataSubmit);
      } else {
        result = await updateClassSchool(dataSubmit);
      }

      if (result.status === 201 || result.status === 200) {
        messageHandler.success(isAdd ? 'Thêm lớp học thành công' : 'Cập nhật lớp học thành công');
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
        title={updateItem?.classSchoolId === '' ? "Thêm lớp học" : "Cập nhật lớp học"}
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

              <Col md={24}>
                <Form.Item
                  label=" Tên lớp học:"
                  rules={[{ required: true, message: 'Phải nhập tên lớp học' }]}
                  name="name"

                  initialValue={updateItem?.name}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập tên lớp học" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Fragment>
      </Modal>
    </div>
  );
};

export default Add_Update_ClassSchool; 