
import React, { Fragment, useState, useEffect } from "react";
import { Button, Input, Space, Table, Row, Col, Modal, Form, notification, Select, DatePicker } from 'antd';
import { createBuilding, getBuildings , updateBuilding} from "../../../Service/BuildingService";
import { getTypeClassRooms } from "../../../Service/TypeClassRoomService";
import { createClassRoom, updateClassRoom } from "../../../Service/ClassRoomService";

import messageHandler from '../../../utils/MessageHandler';


const Add_Update_Building = (props) => {




  const [form] = Form.useForm();
  const { isOpenModel, buildingItem, closeModelAddUpdate, onFinishUpdate } = props;
  const [itemUpdate, setItemUpdate] = useState({});



  useEffect(() => {
    // Set lại giá trị của các trường form khi updateItem thay đổi
    form.resetFields();
    setItemUpdate(buildingItem)
  }, [buildingItem]);

  

  const onFinishFailed = errorInfo => { };

  const onFinish = async (dataForm) => {
    let dataSubmit = { ...itemUpdate, ...dataForm, status: dataForm.status ? 1 : 0 };
    //  console.log('data submit', dataSubmit)
    let isAdd = buildingItem.buildingId === '' ? true : false;
    let result = null;
    try {
      if (isAdd) {
        result = await createBuilding(dataSubmit);
      } else {
        result = await updateBuilding(dataSubmit);
      }

      if (result.status === 201 || result.status === 200) {
        messageHandler.success(isAdd ? 'Thêm tòa nhà thành công' : 'Cập nhật tòa nhà thành công');
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
        title={buildingItem?.buildingId === '' ? "Thêm tòa nhà" : "Cập nhật tòa nhà"}
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
                  label=" Tên tòa nhà:"
                  rules={[{ required: true, message: 'Phải nhập tên tòa nhà' }]}
                  name="buildingName"

                  initialValue={buildingItem?.buildingName}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập tên tòa nhà" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Fragment>
      </Modal>
    </div>
  );
};

export default Add_Update_Building; 