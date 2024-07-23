import UserForm from "../components/User/user.form";
import UserTable from "../components/User/user.table";
import "./users.css";

const UsersPage = () => {
  return (
    <div
      style={{
        display: "flex",
        color: "#fff",
        marginTop: "80px",
        flexDirection: "column",
      }}
    >
      UsersPage
      <div className="user-side">
        <UserForm />
        <UserTable />
      </div>
    </div>
  );
};

export default UsersPage;
