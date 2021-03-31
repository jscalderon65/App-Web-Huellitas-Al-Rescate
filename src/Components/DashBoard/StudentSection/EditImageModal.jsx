import React, { useState } from "react";
import { Button, Modal, Divider, Typography, Input } from "antd";
import { useForm } from "my-customhook-collection";
import { EditOutlined } from "@ant-design/icons";
import { UpdateGalleryItem } from "./FirebaseFunctions/FirestoreFunctions";
const EditImageModal = ({ Data }) => {
  const { Title } = Typography;

  const [loading, setLoading] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [{ description }, onChangeExample] = useForm({
    description: Data.description,
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const SubmitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    UpdateGalleryItem(Data.id, description).then(() => {
      handleCancel();
      setLoading(false);
    });
  };
  return (
    <>
      <Button onClick={showModal} type="primary" size="large">
        <EditOutlined />
        Editar
      </Button>
      <Modal
        centered
        title={null}
        closable={false}
        footer={null}
        onCancel={handleCancel}
        visible={isModalVisible}
        width="auto"
      >
        <form className="form-new-curse" onSubmit={SubmitHandler}>
          <Divider>
            <Title level={3}>Editar descripción</Title>
          </Divider>
          <Input.TextArea
            onChange={onChangeExample}
            name="description"
            placeholder="Descripción de la imagen"
            maxLength={120}
            minLength={20}
            value={description}
            autoComplete="off"
            size="large"
            showCount
            required
          />
          {description !== Data.description && (
            <>
              <Button
                type="primary"
                key="Upload"
                htmlType="submit"
                size="large"
                loading={loading}
              >
                Guardar cambios
              </Button>
              <br />
            </>
          )}
          <Button
            type="primary"
            className="btn btn-primary"
            key="Cancel"
            onClick={handleCancel}
            size="large"
            danger
          >
            Cancelar
          </Button>
        </form>
      </Modal>
    </>
  );
};
export default EditImageModal;
