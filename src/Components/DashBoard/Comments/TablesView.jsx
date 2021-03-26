import React, { useEffect, useState } from "react";
import CommentTable from "./CommentTable";
import { Typography,Divider } from "antd";
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
      <Divider/>
      <Typography.Title style={{ textAlign: "center" }}>
        Configuración de comentarios
      </Typography.Title>
      <Divider/>
      <div className="comments-dashboard-container">
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
