import { Table } from "antd";
import { fetchAllUsersApi } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadingData();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
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
  ];

  const loadingData = async () => {
    const res = await fetchAllUsersApi();
    setDataUsers(res.data);
  };

  return (
    <Table
      rowKey={"_id"}
      columns={columns}
      dataSource={dataUsers}
      className="user-table"
    />
  );
};

export default UserTable;
