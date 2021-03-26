import { firebase } from "../../../Firebase/FirebaseConfig";
import { deleteImage } from "./StorageFunctions";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error, info } = message;
const AddCourse = (titulo,descripcion,img,imgName) => {
  firebase
    .firestore()
    .collection(`Cursos`)
    .add({
      fecha: new Date(),
      titulo,
      descripcion,
      img,
      imgName,
      clases:[],
    })
    .then(() => {
      success("Curso creado satisfactoriamente");
    })
    .catch(() => {
      error("Error al crear curso");
    });
};
const deleteComment = (id, doc) => {
  firebase
    .firestore()
    .collection(id)
    .doc(doc)
    .delete()
    .catch(() => {
      error("error al eliminar el comentario");
    });
};
const DeleteAllComments = (id, arr) => {
  arr.map(async (item) => await deleteComment(id, item.id));
};

const deleteCourse = (id, arr, imgName) => {
  firebase
    .firestore()
    .collection("Cursos")
    .doc(id)
    .delete()
    .then(() => {
      info("Espera...")
      success("Eliminando curso...");
      deleteImage(firebase,"Images",imgName);
      if (arr) {
        success("Eliminando comentarios...");
        DeleteAllComments( id, arr);
      }
    })
    .catch(() => {
      error("Error al eliminar el curso");
    });
};
export { AddCourse, deleteCourse, DeleteAllComments };
