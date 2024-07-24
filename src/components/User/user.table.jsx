import { Table } from "antd";

const UserTable = (props) => {
  const { dataUsers } = props;

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
