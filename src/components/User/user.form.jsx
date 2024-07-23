import { Input, Button } from "antd";
import { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickSubmitBtn = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = { fullName, email, password, phone };
    axios.post(URL_BACKEND, data);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <div className="user-form">
      <div className="user-input">
        <label>Full Name:</label>
        <Input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClickSubmitBtn();
            }
          }}
        />
      </div>
      <div className="user-input">
        <label>Email:</label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClickSubmitBtn();
            }
          }}
        />
      </div>
      <div className="user-input">
        <label>Password:</label>
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClickSubmitBtn();
            }
          }}
        />
      </div>
      <div className="user-input">
        <label>Phone:</label>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClickSubmitBtn();
            }
          }}
        />
      </div>
      <Button type="primary" onClick={handleClickSubmitBtn}>
        Submit
      </Button>
    </div>
  );
};

export default UserForm;
