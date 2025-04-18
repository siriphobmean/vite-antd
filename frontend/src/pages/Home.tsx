import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import { UserOutlined, CheckCircleOutlined, TeamOutlined } from "@ant-design/icons";
import DashboardTable from "../components/DashboardTable";
import DashboardChart from "../components/DashboardChart";
import { mockUsers } from "../data/mockData";

const Home: React.FC = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            <Statistic
              title="จำนวนผู้ใช้ทั้งหมด"
              value={mockUsers.length}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#1890ff", fontSize: "32px" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            <Statistic
              title="ผู้ใช้ Active"
              value={mockUsers.filter((u) => u.status === "Active").length}
              prefix={<CheckCircleOutlined />}
              valueStyle={{ color: "#52c41a", fontSize: "32px" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            <Statistic
              title="Admin"
              value={mockUsers.filter((u) => u.role === "Admin").length}
              prefix={<TeamOutlined />}
              valueStyle={{ color: "#ff4d4f", fontSize: "32px" }}
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
    </>
  );
};

export default Home;