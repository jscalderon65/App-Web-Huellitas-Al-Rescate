import React, { useState } from "react";
import { Button, Modal, Divider, Typography, Input, Image } from "antd";
import { useForm } from "my-customhook-collection";
import {
  FileAddOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { AddImage } from "./FirebaseFunctions/StorageFunctions";

const AddImageModal = () => {
  const { Title } = Typography;

  const [loading, setLoading] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [{ description }, onChangeExample, setFormValues] = useForm({
    description: "",
  });

  const [{ file, isFile }, setPictureUploadSecure] = useState({
    file: [],
    isFile: false,
  });

  const [PrevImageUrl, setPrevImageUrl] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    cancelUploadImage();
    setFormValues({ description: "" });
  };

  const openInputFile = () => {
    document.querySelector("#file").click();
  };

  const handleUploadPicture = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setPrevImageUrl(reader.result);
    };
    setPictureUploadSecure({
      file: e.target.files[0],
      isFile: true,
    });
  };
  const cancelUploadImage = () => {
    setPrevImageUrl("");
    setPictureUploadSecure({
      file: [],
      isFile: false,
    });
  };
  const SubmitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    AddImage(file, "Gallery", description).then(() => {
      setLoading(false);
      handleCancel();
    });
  };
  return (
    <>
      <Button onClick={showModal} type="primary" size="large">
        <FileAddOutlined />
        Agregar Imagen
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
            <Title level={3}>Registro de Imagen</Title>
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
          <input
            style={{ display: "none" }}
            name="file"
            onChange={handleUploadPicture}
            type="file"
            id="file"
            accept="image/*"
            required
          />
          {PrevImageUrl && (
            <div className="before-upload-image-container">
              <Divider>
                {" "}
                <Title level={4}>Imagen escogida</Title>
              </Divider>
              <Image
                style={{
                  width: "250px",
                  height: "250px",
                }}
                src={PrevImageUrl}
                alt="PrevImage"
              />
              <br />
              <Button
                size="large"
                type="primary"
                onClick={cancelUploadImage}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                danger
              >
                <DeleteOutlined />
                Eliminar
              </Button>
            </div>
          )}
          <Button
            onClick={openInputFile}
            value="Cargar"
            size="large"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textOverflow: "ellipsis"
            }}
            danger
          >
            <UploadOutlined />
            {isFile ? (file.name.length>=15?`${file.name.substr(0,15)} ....`:file.name) : "Escoge una imagen"}
          </Button>
          <br />
          {isFile ? (
            <>
              <Button
                className="btn btn-primary"
                type="primary"
                key="Upload"
                htmlType="submit"
                size="large"
                loading={loading}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                Registrar contenido
              </Button>
              <br />
            </>
          ) : null}

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
export default AddImageModal;
