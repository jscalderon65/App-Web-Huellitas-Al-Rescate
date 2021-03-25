import React from "react";
/* import { firebase } from "../../../Firebase/FirebaseConfig";
 */
import { Image, Button, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deleteCourse} from './AddCourse';
const CourseCard = ({ titulo, img, id }) => {
  return (
    <div className="courses-dashboard-card">
      <div>
        <Image className="courses-dashboard-card-img" src={img} alt={titulo} />
      </div>
      <div className="courses-dashboard-card-title">
        <h1>{titulo}</h1>
      </div>
      <div className="courses-dashboard-card-actions">
        <Popconfirm
          title={"¿Deseas eliminar de forma permanente este curso?"}
          onConfirm={()=>deleteCourse(id)} okText="Si"
          cancelText="No"
        >
          <Button type="primary" danger>
            <DeleteOutlined />
            Eliminar
          </Button>
        </Popconfirm>

        <Button type="primary">
          <EditOutlined />
          Editar
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
