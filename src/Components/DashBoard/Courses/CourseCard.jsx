import React from "react";
import { firebase } from "../../../Firebase/FirebaseConfig";
import { Image, Button, Popconfirm } from "antd";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { DeleteOutlined, EditOutlined, FolderAddOutlined } from "@ant-design/icons";
import { deleteCourse } from "./AddCourse";
import {Link} from 'react-router-dom'
const CourseCard = ({ titulo, img, id, imgName, clases}) => {
  const db = firebase.firestore();
  const refColl = db.collection(id);
  const [Data] = useOnSnapshotCollection(refColl);
  return (
    <div className="courses-dashboard-card">
      <div>
        <Image className="courses-dashboard-card-img" src={img} alt={titulo} />
      </div>
      <div className="courses-dashboard-card-title">
        <h3>{titulo}</h3>
      </div>
      <div className="courses-dashboard-card-actions">
        {Data && (
          <>
            <Popconfirm
              title={"¿Deseas eliminar de forma permanente este curso?"}
              onConfirm={() => deleteCourse(id, Data, imgName)}
              okText="Si"
              cancelText="No"
            >
              <Button size="large" type="primary" danger>
                <DeleteOutlined />
                Eliminar
              </Button>
            </Popconfirm>
            <Link to={`/dashboard/cursos/${id}`}>            
            <Button size="large">
            <FolderAddOutlined />
            ({clases.length})
            </Button>
            </Link>
            <Button  size="large" type="primary">
              <EditOutlined />
              Editar
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
