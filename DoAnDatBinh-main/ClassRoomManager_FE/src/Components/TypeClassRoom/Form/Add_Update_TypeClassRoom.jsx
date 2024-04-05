
import React, { Fragment, useState, useEffect } from "react";
import { Button, Input, Space, Table, Row, Col, Modal, Form, notification, Select, DatePicker } from 'antd';
import { createBuilding, getBuildings , updateBuilding} from "../../../Service/BuildingService";
import { createTypeClassRoom, getTypeClassRooms , updateTypeClassRoom} from "../../../Service/TypeClassRoomService";
import { createClassRoom, updateClassRoom } from "../../../Service/ClassRoomService";

import messageHandler from '../../../utils/MessageHandler';


const Add_Update_TypeClassRoom = (props) => {




  const [form] = Form.useForm();
  const { isOpenModel, typeClassRoomItem, closeModelAddUpdate, onFinishUpdate } = props;
  const [itemUpdate, setItemUpdate] = useState({});



  useEffect(() => {
    // Set lại giá trị của các trường form khi updateItem thay đổi
    form.resetFields();
    setItemUpdate(typeClassRoomItem)
  }, [typeClassRoomItem]);

  

  const onFinishFailed = errorInfo => { };

  const onFinish = async (dataForm) => {
    let dataSubmit = { ...itemUpdate, ...dataForm, status: dataForm.status ? 1 : 0 };
    //  console.log('data submit', dataSubmit)
    let isAdd = typeClassRoomItem.typeClassRoomId === '' ? true : false;
    let result = null;
    try {
      if (isAdd) {
        result = await createTypeClassRoom(dataSubmit);
      } else {
        result = await updateTypeClassRoom(dataSubmit);
      }

      if (result.status === 201 || result.status === 200) {
        messageHandler.success(isAdd ? 'Thêm loại phòng thành công' : 'Cập nhật loại thành công');
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
        title={typeClassRoomItem?.typeClassRoomId === '' ? "Thêm loại phòng" : "Cập nhật loại phòng"}
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
                  label=" Tên loại phòng:"
                  rules={[{ required: true, message: 'Phải nhập tên loại phòng' }]}
                  name="typeClassRoomName"

                  initialValue={typeClassRoomItem?.typeClassRoomName}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập tên loại phòng" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              <Col md={12}>
                <Form.Item
                  label=" Số lượng tối đa:"
                  rules={[{ required: true, message: 'Phải nhập số lượng tối đa' }]}
                  name="quantityMax"

                  initialValue={typeClassRoomItem?.quantityMax}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập số lượng tối đa" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Fragment>
      </Modal>
    </div>
  );
};

export default Add_Update_TypeClassRoom; 