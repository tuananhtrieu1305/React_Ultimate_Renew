import UserForm from "../components/User/user.form";
import UserTable from "../components/User/user.table";
import { fetchAllUsersApi } from "../services/api.service";
import { useEffect, useState } from "react";
import "./users.css";

const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadingData();
  }, []);

  const loadingData = async () => {
    const res = await fetchAllUsersApi();
    setDataUsers(res.data);
  };

  return (
    <>
      <div
        className="user-side"
        style={{
          color: "#fff",
          marginTop: "100px",
          position: "fixed",
          inset: "0",
        }}
      >
        <UserForm loadingData={loadingData} />
        <UserTable dataUsers={dataUsers} loadingData={loadingData} />
      </div>
    </>
  );
};

export default UsersPage;
