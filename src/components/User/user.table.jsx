import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UserModalUpdate from "./user.modal.update";
import { useState } from "react";

const UserTable = (props) => {
  const { dataUsers } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "NAME",
      dataIndex: "fullName",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
    },
    {
      title: "ROLE",
      dataIndex: "role",
    },
    {
      title: "ACTION",
      render: (_, record) => (
        <div className="table-action-btn-group">
          <EditOutlined
            style={{ color: "#99fb99" }}
            onClick={() => {
              setIsModalUpdateOpen(true);
              setDataUpdate(record);
            }}
          />
          <DeleteOutlined style={{ color: "#ffa9a9" }} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        rowKey={"_id"}
        columns={columns}
        dataSource={dataUsers}
        className="user-table"
      />
      <UserModalUpdate
        isModalOpen={isModalUpdateOpen}
        setIsModalOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
    </>
  );
};

export default UserTable;
