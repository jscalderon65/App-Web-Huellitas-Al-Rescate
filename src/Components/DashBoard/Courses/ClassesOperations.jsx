import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Popconfirm,
  Typography,
  Divider,
  Spin,
  Skeleton,
  BackTop
} from "antd";
import { firebase } from "../../../Firebase/FirebaseConfig";
import { useOnSnapshotDoc } from "my-customhook-collection";
import { useParams } from "react-router-dom";
import { DeleteOutlined, RollbackOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { deleteClass } from "./FirebaseFunctions/AddClass";
import AddClassModal from "./AddClassModal";
import EditClassModal from "./EditClassModal";
const ClassesOperations = () => {
  const { Title } = Typography;
  const db = firebase.firestore();
  const { courseId } = useParams();
  const refDoc = db.collection("Cursos").doc(courseId);
  const [Data] = useOnSnapshotDoc(refDoc);
  const [DataInfo, setDataInfo] = useState([]);

  const columns = [
    {
      title: <h2>Título</h2>,
      dataIndex: "title",
    },
    {
      title: <h2>Opciones</h2>,
      dataIndex: "options",
    },
  ];

  useEffect(() => {
    Data &&
      setDataInfo(
        Data.clases.reduce((prev, curr) => {
          return [
            ...prev,
            {
              title: <p>{curr.titulo}</p>,
              key: curr.DateCreation,
              options: (
                <div className="class-dashboard-buttons-table">
                  <Popconfirm
                    title={
                      "¿Deseas eliminar de forma permanente esta actividad?"
                    }
                    onConfirm={() =>
                      deleteClass(courseId, Data.clases, curr.DateCreation)
                    }
                    okText="Si"
                    cancelText="No"
                  >
                    <Button
                      type="primary"
                      icon={<DeleteOutlined />}
                      size="large"
                      shape="circle"
                      danger
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </Popconfirm>
                  <EditClassModal
                    InfoClass={curr}
                    Data={Data}
                    courseId={courseId}
                  />
                </div>
              ),
            },
          ];
        }, [])
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data]);

  console.log(Data.clases);

  return (
    <>
    <BackTop/>
    <div className="class-dashboard-container">
      {Data ? (
        <div className="class-dashboard-title">
          <Title level={4}>Actividades de ( {Data.titulo.trim()} )</Title>
        </div>
      ) : (
        <Skeleton />
      )}
      {Data ? (
        <div className="class-dashboard-add-button">
          <Link to="/dashboard/cursos">
            <Button type="primary" size="large" danger>
              <RollbackOutlined /> Volver
            </Button>
          </Link>
          <AddClassModal Data={Data} courseId={courseId} />
        </div>
      ) : (
        <Skeleton />
      )}
      <Divider />
      {Data ? (
        <Table columns={columns} dataSource={DataInfo} />
      ) : (
        <div className="comments-dashboard-spin">
          <Spin size="large" />
        </div>
      )}
    </div>
    </>
  );
};

export default ClassesOperations;
