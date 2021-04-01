import React, { useState } from "react";
import { Modal, Button, Input, Divider, Typography } from "antd";
import {useForm} from 'my-customhook-collection';
import { AddClass, } from "./FirebaseFunctions/AddClass";
import { FileAddOutlined, SaveOutlined } from "@ant-design/icons";
const AddClassModal = ({ Data, courseId }) => {
  const {Title}=Typography;
  const [loading, setLoading]=useState(false)
  const [{title,YoutubeUrl,description},onChangeInput, setFormValues]=useForm({
    title:"",
    YoutubeUrl:"",
    description:""
  })  
  const AddNewClass = () => {
    const DateCreation = JSON.stringify(new Date());
    console.log(Data);
    const newClassArray = [
      ...Data.clases,
      {
        titulo:  title,
        description,
        YoutubeUrl: YoutubeUrl,
        DateCreation,
      },
    ];
    AddClass(courseId, newClassArray,handleCancel,setLoading);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setFormValues({
        title:"",
        YoutubeUrl:"",
        description:""
      })
    setIsModalVisible(false);
  };
  return (
    <div>
      <Button type="primary" size="large" onClick={showModal}>
        <FileAddOutlined /> Agregar clase
      </Button>
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
              e.preventDefault()
              AddNewClass();
            }}
        >
            <Divider>
            <Title level={3}>Registro de Actividad</Title>
          </Divider>
          <Input 
          placeholder="Título"
          autoComplete="off"
          name="title"
          value={title}
          onChange={onChangeInput}
          minLength={10}
          maxLength={24}
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
            <SaveOutlined /> Registrar
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default AddClassModal;
