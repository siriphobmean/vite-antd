import React from "react";
import { Button, Dropdown, Space, Avatar, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, ProfileOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const { Header } = Layout;

interface HeaderProps {
  collapsed: boolean;
  toggleCollapsed: () => void;
  onProfileClick: () => void;
  onLogoutClick: () => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({ collapsed, toggleCollapsed, onProfileClick, onLogoutClick }) => {
  const profileMenu = (
    <Menu onClick={({ key }) => key === 'profile' ? onProfileClick() : onLogoutClick()}>
      <Menu.Item key="profile" icon={<ProfileOutlined />}>
        โปรไฟล์
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        ออกจากระบบ
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ background: "#fff", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
  );
};

export default HeaderComponent;