import React, { useEffect, useState } from "react";
import CommentTable from "./CommentTable";
import { Typography } from "antd";
import { firebase } from "../../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
const TablesView = () => {
  const db = firebase.firestore();
  const refColl = db.collection("Cursos");
  const [Data] = useOnSnapshotCollection(refColl);
  const [DataInfo, setDataInfo] = useState([]);
  useEffect(() => {
    Data &&
      setDataInfo(
        Data.reduce(
          (acc, prec) => [
            ...acc,
            {
              id: prec.id,
              title: prec.titulo,
            },
          ],
          []
        )
      );
  }, [Data]);
  return (
    <>
      <div className="comments-dashboard-title animate__animated animate__fadeIn">
        <Typography.Title style={{ textAlign: "center" }} level={3}>
          Configuración de comentarios
        </Typography.Title>
          <Typography.Title level={3}>Cursos {Data&&`(${Data.length})`}</Typography.Title>
      </div>
      <div className="comments-dashboard-container animate__animated animate__fadeIn">
        {Data &&
          DataInfo &&
          DataInfo.map((item) => (
            <CommentTable
              key={item.id}
              collection={item.id}
              title={item.title}
            />
          ))}
      </div>
    </>
  );
};

export default TablesView;
