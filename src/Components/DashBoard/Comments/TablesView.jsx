import React, { useEffect, useState } from "react";
import CommentTable from "./CommentTable";
import { Typography, BackTop } from "antd";
import { firebase } from "../../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { animateScroll as scroll} from "react-scroll";
const TablesView = () => {
  const scrollType = {
    duration: 500,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic” 
    offset: -10,
 };
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
  useEffect(() => {
    scroll.scrollToTop(scrollType);
  }, []);
  return (
    <>
    < BackTop/>
      <div className="comments-dashboard-title animate__animated animate__fadeIn" style={{background:"white"}}>
        <Typography.Title style={{ textAlign: "center" }} level={3}>
          Configuración de comentarios
        </Typography.Title>
          <Typography.Title level={3}>Cursos {Data&&`(${Data.length})`}</Typography.Title>
      </div>
      <div className="comments-dashboard-container animate__animated animate__fadeIn" style={{background:"white",padding:"80px 30px"}}>
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
