
import React, { Fragment, useState, useEffect } from "react";
import { Button, Input, Space, Table, Row, Col, Modal, Form, notification, Select, DatePicker, Checkbox } from 'antd';


import messageHandler from '../../../utils/MessageHandler';
import { createStudent, updateStudent } from "../../../Service/StudentService";

import { getSubjects } from "../../../Service/SubjectService";
import { getSemesters } from "../../../Service/SemesterService";
import { getClassSchools } from "../../../Service/ClassSchoolService";
import { createCource, updateCource } from "../../../Service/CourseService";
const Add_Update = (props) => {

 

  const [form] = Form.useForm();
  const { isOpenModel, data, closeModelAddUpdate, onFinishUpdate } = props;
  const [itemUpdate, setItemUpdate] = useState({});
  const [listClassSchool, setListClassSchool] = useState([]);
  const [listSubject, setListSubject] = useState([]);
  const [listSemester, setListSemester] = useState([]);


  useEffect(() => {
    // Set lại giá trị của các trường form khi updateItem thay đổi
    form.resetFields();
    setItemUpdate(data)
  }, [data]);


  useEffect(() => {
    getClassSchoolData()
    getSubjectData()
    getSemesterData()
  }, [])


  const getSemesterData = async () => {
    let result = await getSemesters();

    if (result.status === 200) {
      let tempData = [];
      result.data.forEach(element => {
        let item = { value: element.semesterId, label: element.name };
        tempData.push(item);
      });
      setListSemester(tempData);

    }
    else {
      setListSemester([]);
      return;
    }
  }


  const getSubjectData = async () => {
    let result = await getSubjects();

    if (result.status === 200) {
      let tempData = [];
      result.data.forEach(element => {
        let item = { value: element.subjectId, label: element.name };
        tempData.push(item);
      });
      setListSubject(tempData);

    }
    else {
      setListSubject([]);
      return;
    }
  }

  const getClassSchoolData = async () => {
    let result = await getClassSchools();

    if (result.status === 200) {
      let tempData = [];
      result.data.forEach(element => {
        let item = { value: element.classSchoolId, label: element.name };
        tempData.push(item);
      });
      setListClassSchool(tempData);

    }
    else {
      setListClassSchool([]);
      return;
    }
  }


  const onFinishFailed = errorInfo => { };

  const onFinish = async (dataForm) => {
    let dataSubmit = { ...itemUpdate, ...dataForm, status: dataForm.status ? 1 : 0 };
    //  console.log('data submit', dataSubmit)
    let isAdd = itemUpdate.courseId === '' ? true : false;
    let result = null;
    try {
      if (isAdd) {
        result = await createCource(dataSubmit);
      } else {
        result = await updateCource(dataSubmit);
      }

      if (result.status === 201 || result.status === 200) {
        messageHandler.success(isAdd ? 'Thêm học phần thành công' : 'Cập nhật học phần thành công');
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
        title={itemUpdate?.courseId === '' ? "Thêm học phần" : "Cập nhật học phần"}
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
                  label="Tên học phần:"
                  rules={[{ required: true, message: 'Phải nhập tên học phần' }]}
                  name="name"

                  initialValue={data?.name}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Input placeholder="Nhập tên học phần" style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col md={12}>
                <Form.Item
                  label="Môn học:"
                  rules={[{ required: true, message: 'Phải chọn môn học' }]}
                  name="subjectId"
                  initialValue={data?.subjectId}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Select style={{ width: '100%' }}
                    showSearch
                    placeholder="Nhập để tìm kiếm môn học..."
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }

                    options={listSubject}
                  // onChange={handleSelectDaiLyChange}
                  />
                </Form.Item>
              </Col>


            </Row>

            <Row>

              <Col md={12}>
                <Form.Item
                  label="Học kì:"
                  rules={[{ required: true, message: 'Phải chọn học kì' }]}
                  name="semesterId"
                  initialValue={data?.semesterId}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Select style={{ width: '100%' }}
                    showSearch
                    placeholder="Nhập để tìm kiếm học kì..."
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }

                    options={listSemester}
                  // onChange={handleSelectDaiLyChange}
                  />
                </Form.Item>
              </Col>

              <Col md={12}>
                <Form.Item
                  label="Lớp học:"
                  rules={[{ required: true, message: 'Phải chọn lớp học' }]}
                  name="classSchoolId"
                  initialValue={data?.classSchoolId}
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                >
                  <Select style={{ width: '100%' }}
                    showSearch
                    placeholder="Nhập để tìm kiếm lớp học..."
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }

                    options={listClassSchool}
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

export default Add_Update; 