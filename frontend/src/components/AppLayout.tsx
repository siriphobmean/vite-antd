import React, { useState } from "react";
import { Layout, message } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import FooterComponent from "./FooterComponent";
import SiderComponent from "./SiderComponent";
import HeaderComponent from "./HeaderComponent";

const { Content } = Layout;

const AppLayout: React.FC<{ children?: React.ReactNode }> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderComponent collapsed={collapsed} />
      <Layout>
        <HeaderComponent
          collapsed={collapsed}
          toggleCollapsed={toggleCollapsed}
          onProfileClick={() => setIsProfileVisible(true)}
          onLogoutClick={() => {
            localStorage.removeItem("token");
            message.success("ออกจากระบบสำเร็จ");
            setTimeout(() => navigate("/"), 1000);
          }}
        />
        <Content style={{ margin: "16px 16px" }}>
          <div
            style={{
              padding: 24,
              height: "100%",
              background: "white",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <FooterComponent />
      </Layout>
      <ProfileModal
        visible={isProfileVisible}
        onClose={() => setIsProfileVisible(false)}
        
      />
    </Layout>
  );
};

export default AppLayout;
