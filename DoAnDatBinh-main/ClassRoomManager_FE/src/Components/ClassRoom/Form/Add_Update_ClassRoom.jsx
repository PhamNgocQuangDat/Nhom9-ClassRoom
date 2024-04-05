
import React, { Fragment, useState, useEffect } from "react";
import { Button, Input, Space, Table, Row, Col, Modal, Form, notification, Select, DatePicker } from 'antd';
import { getBuildings } from "../../../Service/BuildingService";
import { getTypeClassRooms } from "../../../Service/TypeClassRoomService";
import { createClassRoom, updateClassRoom } from "../../../Service/ClassRoomService";
import messageHandler from '../../../utils/MessageHandler';


const Add_Update_LoHang = (props) => {




  const [form] = Form.useForm();
  const { isOpenModel, classRoomItem, closeModelAddUpdate, onFinishUpdate } = props;
  const [itemUpdate, setItemUpdate] = useState({});

  const [listBuilding, setListBuilding] = useState([]);
  const [listTypeClassRoom, setListTypeClassRoom] = useState([]);



  useEffect(() => {
    // Set lại giá trị của các trường form khi updateItem thay đổi
    form.resetFields();
    setItemUpdate(classRoomItem)
  }, [classRoomItem]);

  useEffect(() => {
    getBuildingData();
    getTypeClassRoomData()
  }, [])

  const getBuildingData = async () => {
    let result = await getBuildings();

    if (result.status === 200) {
      let tempData = [];
      result.data.forEach(element => {
        let item = { value: element.buildingId, label: element.buildingName };
        tempData.push(item);
      });
      setListBuilding(tempData);

    }
    else {
      setListBuilding([]);
      return;
    }
  }

  const getTypeClassRoomData = async () => {
    let result = await getTypeClassRooms();

    if (result.status === 200) {
      let tempData = [];
      result.data.forEach(element => {
        let item = { value: element.typeClassRoomId, label: element.typeClassRoomName };
        tempData.push(item);
      });
      setListTypeClassRoom(tempData);

    }
    else {
      setListTypeClassRoom([]);
      return;
    }
  }


  const onFinishFailed = errorInfo => { };

  const onFinish = async (dataForm) => {
    let dataSubmit = { ...itemUpdate, ...dataForm, status: dataForm.status ? 1 : 0 };
    console.log('data submit', dataSubmit)
    let isAdd = classRoomItem.classRoomId === '' ? true : false;
    let result = null;
    try {
      if (isAdd) {
        result = await createClassRoom(dataSubmit);
      } else {
        result = await updateClassRoom(dataSubmit);
      }

      if (result.status === 201 || result.status === 200) {
        messageHandler.success(isAdd ? 'Thêm phòng học thành công' : 'Cập nhật phòng học thành công');
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
        title={classRoomItem?.classRoomId === '' ? "Thêm phòng học" : "Cập nhật phòng học"}
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
                  label=" Tên phòng học:"
                  rules={[{ required: true, message: 'Phải nhập tên phòng học' }]}
                  name="classRoomName"

                  initialValue={classRoomItem?.classRoomName}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập tên phòng học" style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              <Col md={12}>
                <Form.Item
                  label="Tòa nhà:"
                  rules={[{ required: true, message: 'Phải chọn tòa nhà' }]}
                  name="buildingId"
                  initialValue={classRoomItem?.buildingId}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Select style={{ width: '100%' }}
                    showSearch
                    placeholder="Nhập để tìm kiếm tòa nhà..."
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }

                    options={listBuilding}
                  // onChange={handleSelectDaiLyChange}
                  />
                </Form.Item>
              </Col>




            </Row>

            <Row>



              <Col md={12}>
                <Form.Item
                  label="Loại phòng:"
                  rules={[{ required: true, message: 'Phải chọn loại phòng' }]}
                  name="typeClassRoomId"
                  initialValue={classRoomItem?.typeClassRoomId}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Select style={{ width: '100%' }}
                    showSearch
                    placeholder="Nhập để tìm kiếm loại phòng..."
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }

                    options={listTypeClassRoom}
                  // onChange={handleSelectDaiLyChange}
                  />
                </Form.Item>
              </Col>

            </Row>

            
          </Form>
        </Fragment>
      </Modal>
    </div>
  );
};

export default Add_Update_LoHang; 