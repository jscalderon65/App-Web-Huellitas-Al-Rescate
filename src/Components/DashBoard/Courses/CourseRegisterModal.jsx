import React, { useState } from "react";
import { firebase } from "../../../Firebase/FirebaseConfig";
import { uploadImage } from "./FirebaseFunctions/StorageFunctions";
import { useForm } from "my-customhook-collection";
import { Modal, Image, Button, Input, Typography, Divider } from "antd";
import {
  UploadOutlined,
  DeleteOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { AddCourse } from "./FirebaseFunctions/AddCourse";
import "antd/dist/antd.css";

const CourseRegisterModal = () => {
  const { Title } = Typography;

  const [{ title, description }, onChangeExample, setFormValues] = useForm({
    title: "",
    description: "",
  });

  const [{ file, isFile }, setPictureUploadSecure] = useState({
    file: [],
    isFile: false,
  });

  const [, /* imageUrl */ setImageUrl] = useState("");

  const [PrevImageUrl, setPrevImageUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const openInputFile = () => {
    document.querySelector("#file").click();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setPrevImageUrl("");
    setPictureUploadSecure({
      file: [],
      isFile: false,
    });
    setFormValues({
      title: "",
      description: "",
    });
        document.querySelector("#file").value = "";
  };

  



  const uploadPicture = () => {
    uploadImage(setLoading, setImageUrl, file, "Images", firebase).then(
      ({ urlImagen, ImageName }) => {
        AddCourse(title, description, urlImagen, ImageName);
        handleCancel();
      }
    );
  };

  const cancelUploadImage = () => {
    setPrevImageUrl("");
    setPictureUploadSecure({
      file: [],
      isFile: false,
    });
  };

  return (
    <div>
      <Button type="primary" size="large" onClick={showModal}>
        <FileAddOutlined /> Agregar nuevo curso
      </Button>
      <Modal
        centered
        title={null}
        closable={false}
        footer={null}
        onCancel={handleCancel}
        visible={isModalVisible}
        width="auto"
        bodyStyle={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >

        <form
          className="form-new-curse"
          onSubmit={(e) => {
            e.preventDefault();
            uploadPicture();
          }}
        >
          <Divider>
            <Title level={2}>Registro de curso</Title>
          </Divider>
          <Input
            onChange={onChangeExample}
            name="title"
            value={title}
            maxLength={50}
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
            maxLength={150}        
            value={description.substr(0,150)}
            autoComplete="off"
            size="large"
            showCount
            required
          />

          <br />

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

          <input
            style={{ display: "none" }}
            name="file"
            onChange={handleUploadPicture}
            type="file"
            id="file"
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
              loading={loading}
              size="large"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              Registrar curso
            </Button>
            <br/>
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
    </div>
  );
};

export default CourseRegisterModal;
