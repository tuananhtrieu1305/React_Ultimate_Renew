import { Table, Drawer, message, Popconfirm } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";
import UserModalUpdate from "./user.modal.update";
import { useEffect, useState } from "react";
import { deleteUserApi } from "../../services/api.service";

const UserTable = (props) => {
  const { dataUsers, loadingData } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dataDrawer, setDataDrawer] = useState({});
  const [dataDeleteUser, setDataDeleteUser] = useState({});

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

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
        onClose={() => {
          setIsDrawerOpen(false);
          setPreview(null);
        }}
        open={isDrawerOpen}
        className="user-table-drawer"
      >
        <figure className="user-table-avatar">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
              dataDrawer.avatar
            }`}
            alt={`${dataDrawer.fullName}'s avatar`}
          />
        </figure>
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
        {!preview ? (
          <div className="avatar-upload">
            <label htmlFor="userAvatarUpload">
              <CloudUploadOutlined />
              Change avatar
            </label>
            <input
              type="file"
              id="userAvatarUpload"
              hidden
              onChange={onSelectFile}
            />
          </div>
        ) : (
          <div className="user-table-preview">
            <figure>
              <img src={preview} alt="" />
            </figure>
            <div className="button-wrap">
              <button onClick={() => setPreview(null)}>Discard</button>
              <button>Confirm</button>
            </div>
          </div>
        )}
      </Drawer>
    </>
  );
};

export default UserTable;
