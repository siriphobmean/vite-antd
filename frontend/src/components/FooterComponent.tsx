import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent: React.FC = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      © 2025 Created by You 💼
    </Footer>
  );
};

export default FooterComponent;