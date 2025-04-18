import React, { useState } from "react";
import { Button, Form, Input, Card, Col, Row, Typography, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const { Title, Text, Link } = Typography;

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // 👈 animation state
  const navigate = useNavigate();

  // const onFinish = (values: any) => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     console.log("สมัครข้อมูลสำเร็จ:", values);
  //     message.success("สมัครสมาชิกสำเร็จ!");
  //     navigate("/");
  //     setLoading(false);
  //   }, 500);
  // };
  const onFinish = (values: any) => {
    setLoading(true);
    console.log("สมัครข้อมูลสำเร็จ:", values);
    message.success("สมัครสมาชิกสำเร็จ!");
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        navigate("/");
        setLoading(false);
      }, 500);
    }, 1000);
  };

  const handleLoginClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div
        className={`login-page ${isFadingOut ? "fade-out" : ""}`}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // background: 'linear-gradient(135deg, #e6f7ff, #ffffff)',
        }}
      >
        <Row justify="center" align="middle" style={{ width: "100%" }}>
          <Col xs={24} sm={18} md={10} lg={6}>
            <Card
              title={
                <div style={{ textAlign: "center" }}>
                  <AntDesignOutlined
                    style={{ fontSize: "64px", color: "#1890ff" }}
                  />
                  <Title
                    level={3}
                    style={{
                      marginTop: "8px",
                      color: "#1890ff",
                      fontFamily: "Kanit",
                    }}
                  >
                    สมัครสมาชิก
                  </Title>
                </div>
              }
              bordered={false}
              style={{
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <Form name="register" onFinish={onFinish} layout="vertical">
                <Form.Item
                  name="username"
                  label="ชื่อผู้ใช้"
                  rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้" }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="ชื่อผู้ใช้"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="อีเมล"
                  rules={[
                    { required: true, message: "กรุณากรอกอีเมล" },
                    { type: "email", message: "รูปแบบอีเมลไม่ถูกต้อง" },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="example@email.com"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="รหัสผ่าน"
                  rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="รหัสผ่าน"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  label="ยืนยันรหัสผ่าน"
                  dependencies={["password"]}
                  rules={[
                    { required: true, message: "กรุณายืนยันรหัสผ่าน" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error("รหัสผ่านไม่ตรงกัน"));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="ยืนยันรหัสผ่าน"
                    size="large"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    loading={loading}
                  >
                    สมัครสมาชิก
                  </Button>
                </Form.Item>

                <div style={{ textAlign: "center" }}>
                  <Text style={{ fontFamily: "kanit" }}>มีบัญชีอยู่แล้ว?</Text>{" "}
                  <Link
                    onClick={handleLoginClick}
                    style={{ fontFamily: "kanit" }}
                  >
                    เข้าสู่ระบบ
                  </Link>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RegisterPage;
