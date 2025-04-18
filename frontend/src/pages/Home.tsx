import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import DashboardTable from "../components/DashboardTable";
import DashboardChart from "../components/DashboardChart";
import { mockUsers } from "../data/mockData";

const Home: React.FC = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card>
            <Statistic title="จำนวนผู้ใช้ทั้งหมด" value={mockUsers.length} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="ผู้ใช้ Active"
              value={mockUsers.filter((u) => u.status === "Active").length}
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
    </>
  );
};

export default Home;
