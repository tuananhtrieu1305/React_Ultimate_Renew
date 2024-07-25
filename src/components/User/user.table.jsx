import { Table, Drawer, message, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UserModalUpdate from "./user.modal.update";
import { useState } from "react";
import { deleteUserApi } from "../../services/api.service";

const UserTable = (props) => {
  const { dataUsers, loadingData } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dataDrawer, setDataDrawer] = useState({});
  const [dataDeleteUser, setDataDeleteUser] = useState({});

  const confirm = async () => {
    const res = await deleteUserApi(dataDeleteUser._id);
    if (res.data) {
      loadingData();
      message.success("Delete user succeed");
    } else {
      message.error(res.message);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      render: (_, record) => (
        <a
          href="#"
          onClick={() => {
            setIsDrawerOpen(true);
            setDataDrawer(record);
          }}
          className="table-user-id"
        >
          {record._id}
        </a>
      ),
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
          <Popconfirm
            title={`Delete ${dataDeleteUser.fullName}`}
            description="Are you sure to delete this user?"
            onConfirm={confirm}
            okText="Yes"
            placement="left"
            cancelText="No"
          >
            <DeleteOutlined
              style={{ color: "#ffa9a9" }}
              onClick={() => setDataDeleteUser(record)}
            />
          </Popconfirm>
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
        loadingData={loadingData}
      />
      <Drawer
        title={`Full information of ${dataDrawer.fullName}`}
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        className="user-table-drawer"
      >
        <p>
          <strong>ID</strong> : {dataDrawer._id}
        </p>
        <p>
          <strong>NAME</strong> : {dataDrawer.fullName}
        </p>
        <p>
          <strong>EMAIL</strong> : {dataDrawer.email}
        </p>
        <p>
          <strong>PHONE</strong> : {dataDrawer.phone}
        </p>
        <p>
          <strong>ROLE</strong> : {dataDrawer.role}
        </p>
      </Drawer>
    </>
  );
};

export default UserTable;
