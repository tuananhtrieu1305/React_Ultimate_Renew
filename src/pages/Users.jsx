import UserForm from "../components/User/user.form";
import UserTable from "../components/User/user.table";
import "./users.css";

const UsersPage = () => {
  return (
    <>
      <div
        className="user-side"
        style={{
          color: "#fff",
          marginTop: "100px",
        }}
      >
        <UserForm />
        <UserTable />
      </div>
    </>
  );
};

export default UsersPage;
