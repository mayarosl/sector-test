import React from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons';


const toggleSortIcon = (colName, sortedColumn) => {
  return (
    <div className="sort-container">
      {colName}
      {sortedColumn ? (
            sortedColumn.order === "ascend" ? (
              <UpOutlined />
            ) : (
              <DownOutlined />
            )
          ) : <DownOutlined />}
    </div>
  );
};

export default toggleSortIcon;