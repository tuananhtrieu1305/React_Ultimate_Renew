import { Input, Button } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickSubmitBtn = () => {
    console.log({ fullName, email, password, phone });
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
