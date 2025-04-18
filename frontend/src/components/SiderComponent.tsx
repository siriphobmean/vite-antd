import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

interface SiderProps {
  collapsed: boolean;
}

const SiderComponent: React.FC<SiderProps> = ({ collapsed }) => {
  return (
    <Sider collapsible collapsed={collapsed} trigger={null}>
      <div
        style={{
          color: "#fff",
          fontSize: "20px",
          textAlign: "center",
          margin: "16px 0",
        }}
      >
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Admin Icon"
          style={{ width: "30px", height: "30px" }}
        />{" "}
        {!collapsed && "Ant Design"}
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
  );
};

export default SiderComponent;
