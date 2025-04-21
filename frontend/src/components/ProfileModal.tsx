// import React from "react";
// import { Modal, Descriptions } from "antd";

// interface ProfileModalProps {
//   visible: boolean;
//   onClose: () => void;
// }

// const ProfileModal: React.FC<ProfileModalProps> = ({ visible, onClose }) => {
//   return (
//     <Modal
//       title="ข้อมูลโปรไฟล์"
//       open={visible}
//       onCancel={onClose}
//       footer={null} // << ไม่แสดง OK / Cancel
//     >
//       <Descriptions column={1} bordered>
//         <Descriptions.Item label="ชื่อ">Siriphob</Descriptions.Item>
//         <Descriptions.Item label="อีเมล">siriphob@sut.ac.th</Descriptions.Item>
//         <Descriptions.Item label="สถานะ">Active</Descriptions.Item>
//         <Descriptions.Item label="บทบาท">Admin</Descriptions.Item>
//       </Descriptions>
//     </Modal>
//   );
// };

// export default ProfileModal;

import React from "react";
import { Modal, Descriptions, Avatar, Typography, Divider, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface ProfileModalProps {
  visible: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      // centered
      getContainer={false}
      style={{top: 50}}
    >
      <Space direction="vertical" style={{ width: "100%" }} align="center">
        <Avatar size={64} icon={<UserOutlined />} style={{ backgroundColor: "#800020" }} />
        <Title level={4} style={{ margin: 0 }}>Siriphob</Title>
        <Text type="secondary">siriphob@sut.ac.th</Text>
      </Space>

      <Divider style={{ margin: "16px 0" }} />

      <Descriptions
        column={1}
        bordered
        labelStyle={{ fontWeight: "bold", width: 120 }}
        contentStyle={{ paddingLeft: 16 }}
        size="middle"
      >
        <Descriptions.Item label="ชื่อ">Siriphob</Descriptions.Item>
        <Descriptions.Item label="อีเมล">siriphob@sut.ac.th</Descriptions.Item>
        <Descriptions.Item label="สถานะ">
          <Text type="success">Active</Text>
        </Descriptions.Item>
        <Descriptions.Item label="บทบาท">
          <Text strong>Admin</Text>
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default ProfileModal;