import { Button, Checkbox, Form, Input } from "antd";

const RegisterPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        backgroundColor: "#ccc",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          border: "3px solid #000",
          width: "800px",
          padding: "100px",
          borderRadius: "16px",
          backgroundColor: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Register
        </h1>
        <span
          style={{
            fontSize: "14px",
            textAlign: "center",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Join with us !
        </span>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          form={form}
        >
          <Form.Item label="Full Name" name="fullName">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number" name="phone">
            <Input />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              padding: "20px 30px",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            onClick={() => form.submit()}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
