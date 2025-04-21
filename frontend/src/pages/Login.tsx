import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  Card,
  Col,
  Row,
  Typography,
  message,
  Checkbox,
  ConfigProvider,
  Divider,
} from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginPage.css";
import logo from "../assets/SUT_ENG_LOGO/ENGi Logo-Official.png";

const { Title, Text, Link } = Typography;

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); // 👈 animation state
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);

    if (remember) {
      localStorage.setItem("rememberedUsername", values.username);
    } else {
      localStorage.removeItem("rememberedUsername");
    }

    setTimeout(() => {
      if (values.username === "admin" && values.password === "1234") {
        localStorage.setItem("token", "mock-token");
        message.success("เข้าสู่ระบบสำเร็จ");
        setTimeout(() => navigate("/home"), 1000);
      } else {
        message.error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
      setLoading(false);
    }, 1000);
  };

  // const onFinish = (values: any) => {
  //   setLoading(true);

  //   if (remember) {
  //     localStorage.setItem("rememberedUsername", values.username);
  //   } else {
  //     localStorage.removeItem("rememberedUsername");
  //   }

  //   setTimeout(() => {
  //     if (values.username === "admin" && values.password === "1234") {
  //       localStorage.setItem("token", "mock-token");
  //       message.success("เข้าสู่ระบบสำเร็จ");
  //       setIsFadingOut(true);

  //       setTimeout(() => {
  //         navigate("/home");
  //       }, 500);
  //     } else {
  //       message.error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  //     }
  //     setLoading(false);
  //   }, 1000);
  // };

  const handleRegisterClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      navigate("/register");
    }, 500); // เวลาเดียวกับ animation
  };

  useEffect(() => {
    const rememberedUsername = localStorage.getItem("rememberedUsername");
    if (rememberedUsername) {
      setRemember(true);
    }
  }, []);

  return (
    <>
      <div className="wave" />
      <div className="wave" />
      <div className="wave" />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#800020",
          },
        }}
      >
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
          className={`login-page ${isFadingOut ? "fade-out" : ""}`}
        >
          <Row justify="center" align="middle" style={{ width: "100%" }}>
            <Col xs={24} sm={18} md={10} lg={8}>
              <Card
                title={
                  <div style={{ textAlign: "center" }}>
                    <img src={logo} alt="ENGi Logo" style={{ width: "30%" }} />
                    <Title
                      level={3}
                      style={{
                        marginTop: "8px",
                        color: "#800020",
                        fontFamily: "Kanit",
                        marginBottom: 0,
                      }}
                    >
                      เข้าสู่ระบบ
                    </Title>
                  </div>
                }
                bordered={false}
                headStyle={{
                  borderBottom: "none", // <-- ลบเส้นใต้หัวข้อ
                }}
                style={{
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <Divider style={{ borderColor: "#d9d9d9", marginTop: 0 }} />
                <Form
                  name="login"
                  onFinish={onFinish}
                  initialValues={{
                    username: localStorage.getItem("rememberedUsername") || "",
                  }}
                >
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: "กรุณากรอกชื่อผู้ใช้" }]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="ชื่อผู้ใช้"
                      size="large"
                      autoComplete="off"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="รหัสผ่าน"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Checkbox
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    >
                      จำชื่อผู้ใช้
                    </Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      size="large"
                      loading={loading}
                    >
                      เข้าสู่ระบบ
                    </Button>
                  </Form.Item>

                  <div style={{ textAlign: "center" }}>
                    <Text style={{ fontFamily: "kanit" }}>ยังไม่มีบัญชี?</Text>{" "}
                    <Link
                      onClick={handleRegisterClick}
                      style={{ fontFamily: "kanit", color: "#800020" }}
                    >
                      สมัครสมาชิก
                    </Link>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </ConfigProvider>
    </>
  );
};

export default LoginPage;
