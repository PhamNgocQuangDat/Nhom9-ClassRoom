import React, { useRef, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, EditTwoTone, DeleteTwoTone, FilterTwoTone, ExclamationCircleFilled } from '@ant-design/icons';

import { Table, Button, Row, Col, Spin, Modal, Divider, Input, Space, Popover, Checkbox , Tag} from 'antd';
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa6";

import moment from "moment";
import messageHandler from '../../utils/MessageHandler';
import FilterColumn from './Form/FilterColumn';
import { getBuildings, deleteBuilding } from '../../Service/BuildingService';


import Add_Update_TypeClassRoom from './Form/Add_Update_TypeClassRoom';
import { getTypeClassRooms, deleteTypeClassRoom } from '../../Service/TypeClassRoomService';
const { confirm } = Modal;
const TypeClassRoomTable = () => {


  const [listTypeClassRoom, setListTypeClassRoom] = useState();

  const [typeClassRoomItem, setTypeClassRoomItem] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);




  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };




  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const loadData = async () => {
    try {
      const result = await getTypeClassRooms();
      
      if (result === null) {
        messageHandler.error('Lỗi hệ thống');
        setListTypeClassRoom([]);
      } else {
        if (result.status === 200) {
          setListTypeClassRoom(result.data);
        } else {
          setListTypeClassRoom([]);
        }
      }
    } catch (error) {
      console.error('Error loading data:', error);
      setListTypeClassRoom([]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const delete_Action = async (item) => {
    confirm({
      title: 'Bạn chắc chắn muốn xóa loại phòng?',
      icon: <ExclamationCircleFilled />,
      // content: 'Some descriptions',

      okText: 'Có',
      okType: 'danger',
      cancelText: 'Không',
      onOk() {
        // console.log(item);
        handleDelete(item)
      },
      onCancel() {

      },
    });
  };

  const handleDelete = async (item) => {
    let result = null
    result = await deleteBuilding(item.buildingId)

    if (result === null) {
      messageHandler.error('Lỗi hệ thống')
    } else {
      if (result.status === 200) {
        messageHandler.success('Xóa thành công')
        loadData()
      } else {
        messageHandler.error('Xóa thất bại')
      }
    }


  };

  const columns = [
    {
      title: 'STT',
      width: 100,
      dataIndex: 'stt',
      key: 'stt',
      align: "center",
      render: (text, record, index) => {
        const stt = index + 1;
        return stt;
      }
    },
    {
      title: 'Loại phòng',
      // width: 170,
      dataIndex: 'typeClassRoomName',
      key: 'typeClassRoomName',
      
      ...getColumnSearchProps('typeClassRoomName'),
     
    },

    {
      title: 'Số lượng tối đa',
      // width: 170,
      dataIndex: 'quantityMax',
      key: 'quantityMax',
      
      ...getColumnSearchProps('quantityMax'),
     
    },

  
    {

      title: 'Trạng thái',
      dataIndex: 'active',
      key: 'active',
      align: 'center',

      render: (active) => <Tag color={active ? 'green' : "red"}>{active ? "Hoạt động" : "Ngưng hoạt động"}</Tag>,
      
    },
    {
      title: 'Tác vụ',
      key: 'tacVu',
      fixed: 'right',
      width: 80,
      render: (_, item) => {
        return (
          <>
            <EditTwoTone style={{ margin: 5 }} onClick={() => Update_Action(item)} />
            <DeleteTwoTone color='red' style={{ margin: 5 }} onClick={() => delete_Action(item)} />
          </>
        );
      },
    },
  ];


  const defaultCheckedList = columns.map((item) => item.key);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));
  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key),
  }));

  const handleCheckboxChange = (checkedValues) => {
    setCheckedList(checkedValues);
  };
  
  const showModelAddUpdate = async () => {
    setIsOpenModel(true)
  }
  const closeModelAddUpdate = async () => {
    setIsOpenModel(false)
  }

  const Create_Action = () => {
    let addItem = {
      typeClassRoomId: '',
      typeClassRoomName: '',
      quantityMax:0,
      active:true
    }
    setTypeClassRoomItem(addItem)
    showModelAddUpdate()
  }

  const Update_Action = (updateItem) => {

    setTypeClassRoomItem(updateItem)
    showModelAddUpdate()
  }

  return (
   
    listTypeClassRoom?
    <>
      <Row style={{}}>
        <Col md={8} style={{ textAlign: 'left', fontSize: 20 }}>
      
          <Popover placement="bottomLeft" title='Filter' content={<FilterColumn checkedList= {checkedList} onCheckboxChange= {handleCheckboxChange}  options={options}/>}>

      
            <Button type="text"><FilterTwoTone /></Button>
          </Popover>
        </Col>

        <Col md={16} style={{ textAlign: 'right' }}>

          <Button type="primary" onClick={Create_Action}>Tạo loại phòng</Button>

        </Col>
      </Row>

      <Table
        columns={newColumns}
        rowKey='typeClassRoomId'
        dataSource={listTypeClassRoom}
        style={{ marginTop: 10 }}
        // scroll={{
        //   x: 1500,
        //   y: '55vh',
        // }}
      />

      <Add_Update_TypeClassRoom
        isOpenModel={isOpenModel}
        typeClassRoomItem={typeClassRoomItem}
        closeModelAddUpdate={closeModelAddUpdate}
        onFinishUpdate={(isAdd, data) => {
          // let dataUpdate = null;
          // if (isAdd) {
          //     dataUpdate = [...companyData];
          //     dataUpdate.push(data);
          // }
          // else{
          //   dataUpdate = companyData.map((item) => {
          //     if (item.maDaiLy === data.maDaiLy) {
          //       return data;
          //     }
          //     return item;
          //   });
          // } 
          // setCompanyData(dataUpdate);
          loadData()
        }}
      />

    </>
       :
       <div style={{
         textAlign: 'center',
         padding: '50px 50px', 
         textAlign: 'center', 
         borderRadius: 4,
         height:'100%' 
     }}>
         <Spin size='large' />
     </div>


  )
};
export default TypeClassRoomTable;