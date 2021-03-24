import React, { useEffect, useState } from "react";
import { firebase } from "../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Table, message } from "antd";
import "antd/dist/antd.css";
const { error, success } = message;
const CommentTable = ({ collection = "comments" }) => {
  const db = firebase.firestore();
  const refColl = db.collection(collection);
  const [Data] = useOnSnapshotCollection(refColl);
  const [newData, setNewData] = useState([]);
  console.log(Data);
  const columns = [
    {
      title: "Usuario",
      dataIndex: "name",
    },
    {
      title: "Comentario",
      dataIndex: "content",
    },
    {
      title: "Opción",
      dataIndex: "action",
    },
  ];
  const deleteComment = (collection, curr) => {
    db.collection(collection)
      .doc(curr.id)
      .delete()
      .then(() => {
        success("Comentario eliminado");
      })
      .catch(() => {
        error("error al eliminar el comentario");
      });
  };
  useEffect(() => {
    Data &&
      setNewData(
        Data.reduce((prev, curr) => {
          return [
            ...prev,
            {
              key: curr.id,
              name: curr.userInfo.displayName,
              content: curr.CommentContent,
              action: (
                <Button
                  type="primary"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size="large"
                  icon={<DeleteOutlined />}
                  onClick={() => deleteComment(collection, curr)}
                  shape="circle"
                  danger
                />
              ),
            },
          ];
        }, [])
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Data]);
  return (
    <div>
      {Data && <Table columns={columns} dataSource={newData} size="small" />}
    </div>
  );
};
export default CommentTable;
