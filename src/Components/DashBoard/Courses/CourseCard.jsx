import React from "react";
import { firebase } from "../../../Firebase/FirebaseConfig";
import { Image, Button, Popconfirm, Tooltip} from "antd";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { deleteCourse } from "./FirebaseFunctions/AddCourse";
import { Link } from "react-router-dom";
import { DeleteOutlined, FolderAddOutlined } from "@ant-design/icons";
import EditCourseModal from "./EditCourseModal";
const CourseCard = ({ titulo, img, id, imgName, clases, descripcion }) => {
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
            <Tooltip placement="top" title={"Configuración de clases"}>
            <Link to={`/dashboard/cursos/${id}`}>
              <Button className="button-add" size="large">
                <FolderAddOutlined />({clases.length})
              </Button>
            </Link>
            </Tooltip>
            <EditCourseModal Data={{ titulo, img, id, imgName, clases,descripcion }} />
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
