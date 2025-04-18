import React, { useState } from "react";
import {
  Layout,
  Menu,
  Statistic,
  Card,
  Row,
  Col,
  theme,
  Avatar,
  Dropdown,
  Space,
  Button,
  message,
} from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // << เพิ่มตรงนี้
import DashboardTable from "../components/DashboardTable";
import DashboardChart from "../components/DashboardChart";
import { mockUsers } from "../data/mockData";
import ProfileModal from "../components/ProfileModal"; // << import modal

const { Header, Sider, Content, Footer } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false); // << modal visibility
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "profile") {
      setIsProfileVisible(true);
    } else if (key === "logout") {
      localStorage.removeItem("token");
      message.success("ออกจากระบบสำเร็จ");
      setTimeout(() => navigate("/"), 1000);
    }
  };

  const profileMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<ProfileOutlined />}>
        โปรไฟล์
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        ออกจากระบบ
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <div
          style={{
            color: "#fff",
            fontSize: "20px",
            textAlign: "center",
            margin: "16px 0",
          }}
        >
          👨‍💻 {!collapsed && "Admin Panel"}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            Reports
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
          />
          <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
            <Space style={{ cursor: "pointer" }}>
              <Avatar style={{ backgroundColor: "#1890ff" }}>S</Avatar>
              <span style={{ fontWeight: "bold" }}>Siriphob</span>
            </Space>
          </Dropdown>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="จำนวนผู้ใช้ทั้งหมด"
                    value={mockUsers.length}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="ผู้ใช้ Active"
                    value={
                      mockUsers.filter((u) => u.status === "Active").length
                    }
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Admin"
                    value={mockUsers.filter((u) => u.role === "Admin").length}
                  />
                </Card>
              </Col>
            </Row>

            <div style={{ marginTop: "32px" }}>
              <h2>รายชื่อผู้ใช้งาน</h2>
              <DashboardTable data={mockUsers} />
            </div>
            <div style={{ marginTop: "32px" }}>
              <h2>แนวโน้มผู้ใช้</h2>
              <DashboardChart />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          © 2025 Created by You 💼
        </Footer>
      </Layout>
      {/* Modal โปรไฟล์ */}
      <ProfileModal
        visible={isProfileVisible}
        onClose={() => setIsProfileVisible(false)}
      />
    </Layout>
  );
};

export default Home;
