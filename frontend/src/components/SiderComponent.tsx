import React from "react";
import { Divider, Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import logo from "../assets/SUT_ENG_LOGO/ENGi Logo-White.png";

const { Sider } = Layout;

interface SiderProps {
  collapsed: boolean;
}

const SiderComponent: React.FC<SiderProps> = ({ collapsed }) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      style={{ background: "#800020" }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: "20px",
          textAlign: "center",
          margin: "16px 0",
        }}
      >
        <img
          src={logo}
          alt="ENGi Logo"
          style={{ width: "30px", height: "30px" }}
        />{" "}
        {!collapsed && "ENGi SUT"}
      </div>
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <Divider
          style={{
            borderColor: "white",
          }}
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ background: "#800020" }}
      >
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
  );
};

export default SiderComponent;
