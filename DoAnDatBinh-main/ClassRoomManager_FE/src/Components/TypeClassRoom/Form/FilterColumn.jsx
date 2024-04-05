import React from 'react';
import { Checkbox, Col, Row } from 'antd';

const FilterColumn = ({ checkedList, onCheckboxChange, options }) => {


  return (
    <Checkbox.Group
      style={{ width: 750 }}
      value={checkedList}
      onChange={onCheckboxChange}
    >
      <Row gutter={[16, 16]}>
        {options.map((option) => (
          <Col key={option.value} span={6}>
            <Checkbox value={option.value}>{option.label}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
};

export default FilterColumn;
