import React, { useState } from "react";
import { Modal, Button, Input, Divider, Typography } from "antd";
import { useForm } from "my-customhook-collection";
import { EditOutlined, SaveOutlined } from "@ant-design/icons";
import { EditClass } from "./FirebaseFunctions/AddClass";
const EditClassModal = ({ InfoClass, Data, courseId }) => {
  const { Title } = Typography;
  const [loading, setLoading] = useState(false);
  const [{ title, YoutubeUrl, description }, onChangeInput] = useForm({
    title: InfoClass.titulo,
    YoutubeUrl: InfoClass.YoutubeUrl,
    description: InfoClass.description,
  });

  const onEditClass = () => {
    EditClass(
      courseId,
      Data.clases,
      { title, YoutubeUrl, description, DateCreation: InfoClass.DateCreation },
      handleCancel,
      setLoading
    );
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button
        shape="circle"
        onClick={showModal}
        icon={<EditOutlined />}
        type="primary"
        size="large"
      />

      <Modal
        title={null}
        footer={null}
        closable={false}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width="auto"
        centered
      >
        <form
          className="class-dashboard-modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            onEditClass();
          }}
        >
          <Divider>
            <Title level={3}>Edición de Actividad</Title>
          </Divider>
          <Input
            placeholder="Título"
            autoComplete="off"
            name="title"
            value={title}
            onChange={onChangeInput}
            minLength={10}
            maxLength={20}
            required
          />
          <Input
            placeholder="URL de Youtube"
            autoComplete="off"
            name="YoutubeUrl"
            value={YoutubeUrl}
            onChange={onChangeInput}
            minLength={23}
          />
          <Input.TextArea
            placeholder="Descripción"
            autoComplete="off"
            name="description"
            value={description}
            onChange={onChangeInput}
            maxLength={120}
            minLength={20}
            size="large"
            required
          />
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={loading}
          >
            <SaveOutlined /> Guardar
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default EditClassModal;
