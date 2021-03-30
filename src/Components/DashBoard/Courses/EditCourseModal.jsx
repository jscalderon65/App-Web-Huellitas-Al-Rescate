import React, { useState } from "react";
import { firebase } from "../../../Firebase/FirebaseConfig";
import { Button, Modal, Input, Divider, Typography, Image } from "antd";
import { useForm } from "my-customhook-collection";
import { EditUploadImage } from "./FirebaseFunctions/StorageFunctions";
import {
  EditOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { EditCourse } from "./FirebaseFunctions/AddCourse";
const EditCourseModal = ({ Data }) => {
  const { Title } = Typography;

  const [loading, setLoading] = useState(false);

  const [ImageLoading, setImageLoading] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [{ file, isFile }, setPictureUploadSecure] = useState({
    file: [],
    isFile: false,
  });

  const [PrevImageUrl, setPrevImageUrl] = useState("");

  const handleUploadPicture = (e) => {
    const readerEdit = new FileReader();
    setPictureUploadSecure({
      file: e.target.files[0],
      isFile: true,
    });
    readerEdit.readAsDataURL(e.target.files[0]);
    readerEdit.onload = function () {
      setPrevImageUrl(readerEdit.result);
    };
  };

  const [{ title, description }, onChangeExample] = useForm({
    title: Data.titulo,
    description: Data.descripcion,
  });

  const openInputFile = () => {
    document.querySelector(`#${Data.id}`).click();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setPrevImageUrl("");
    document.querySelector(`#${Data.id}`).value = "";
  };

  const onEditSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    EditCourse(Data.id, { title, description }).then(() => {
      setLoading(false);
      handleCancel();
    });
  };

  const cancelUploadImage = () => {
    setPrevImageUrl("");
    setPictureUploadSecure({
      file: [],
      isFile: false,
    });
  };

  const onChangeImage = () => {
    setImageLoading(true);
    EditUploadImage(
      file,
      "Images",
      firebase,
      {
        ref: "Images",
        title: Data.imgName,
      },
      Data.id
    ).then(() => {
      setImageLoading(false);
      cancelUploadImage();
      handleCancel();
    });
  };

  return (
    <>
      <Button onClick={showModal} size="large" type="primary">
        <EditOutlined />
        Editar
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
        <form className="form-new-curse" onSubmit={onEditSubmit}>
          <Divider>
            <Title level={2}>Información del curso</Title>
          </Divider>
          <Input
            onChange={onChangeExample}
            name="title"
            value={title}
            maxLength={20}
            minLength={20}
            placeholder="Título"
            autoComplete="off"
            size="large"
            required
          />
          <br />
          <Input.TextArea
            onChange={onChangeExample}
            name="description"
            placeholder="Descripción del curso"
            maxLength={120}
            minLength={20}
            value={description}
            autoComplete="off"
            size="large"
            showCount
            required
          />

          {title !== Data.titulo || description !== Data.descripcion ? (
            <>
              <br />
              <Button
                type="primary"
                loading={loading}
                size="large"
                htmlType="submit"
              >
                Guardar cambios en descripción y título
              </Button>
            </>
          ) : null}
          <br />
        </form>
        <div className="form-new-curse">
          <Divider>
            <Title level={2}>Imagen del curso</Title>
          </Divider>
          <div className="before-upload-image-container">
            <h3>Imagen Actual </h3>
            <Image
              style={{
                width: "250px",
                height: "250px",
              }}
              src={Data.img}
              alt={Data.imgName}
            />
          </div>
          {PrevImageUrl && (
            <div className="before-upload-image-container">
              <h3>Imagen Nueva </h3>
              <Image
                style={{
                  width: "250px",
                  height: "250px",
                }}
                src={PrevImageUrl}
                alt={Data.imgName}
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
                Cancelar
              </Button>
            </div>
          )}

          {Data && (
            <>
              <input
                style={{ display: "none" }}
                name="file"
                onChange={handleUploadPicture}
                type="file"
                id={`${Data.id}`}
                accept="image/*"
                required
              />
              <Button
                onClick={openInputFile}
                value="Cargar"
                size="large"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                danger
              >
                <UploadOutlined />
                {isFile ? file.name : "Cambiar imagen"}
              </Button>
            </>
          )}
          {isFile ? (
            <>
              <br />

              <Button
                className="btn btn-primary"
                type="primary"
                key="Upload"
                htmlType="submit"
                size="large"
                loading={ImageLoading}
                onClick={onChangeImage}
              >
                Cambiar imagen del curso
              </Button>
            </>
          ) : null}
          <br />
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
        </div>
      </Modal>
    </>
  );
};
export default EditCourseModal;
