import React from "react";
import { Modal, Descriptions } from "antd";

interface ProfileModalProps {
  visible: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      title="ข้อมูลโปรไฟล์"
      open={visible}
      onCancel={onClose}
      footer={null} // << ไม่แสดง OK / Cancel
    >
      <Descriptions column={1} bordered>
        <Descriptions.Item label="ชื่อ">Siriphob</Descriptions.Item>
        <Descriptions.Item label="อีเมล">siriphob@sut.ac.th</Descriptions.Item>
        <Descriptions.Item label="สถานะ">Active</Descriptions.Item>
        <Descriptions.Item label="บทบาท">Admin</Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default ProfileModal;