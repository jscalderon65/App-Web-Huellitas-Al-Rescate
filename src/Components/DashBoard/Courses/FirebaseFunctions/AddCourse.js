import { firebase } from "../../../../Firebase/FirebaseConfig";
import { deleteImage } from "./StorageFunctions";
import moment from "moment";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error, info } = message;
const AddCourse = (titulo, descripcion, img, imgName) => {
  moment.locale("es");
  firebase
    .firestore()
    .collection(`Cursos`)
    .add({
      fecha: moment().format('[Registrado el día] D[/]MM[/]YYYY [a las]  h:mm:ss a'),
      titulo,
      descripcion,
      img,
      imgName,
      clases: [],
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
      info("Espera...");
      success("Eliminando curso...");
      deleteImage(firebase, "Images", imgName);
      if (arr) {
        success("Eliminando comentarios...");
        DeleteAllComments(id, arr);
      }
    })
    .catch(() => {
      error("Error al eliminar el curso");
    });
};
const EditCourse = async (id, NewCourseInfo) => {
  try {    
    const update = await firebase
      .firestore()
      .collection("Cursos")
      .doc(id)
      .update({
        titulo: NewCourseInfo.title,
        descripcion: NewCourseInfo.description,
      });
      success("Curso actualizado");
      return update;
  } catch (e) {
    error(e);
    return e;
  }
};
const editImageCourse = async (id, NewCourseInfo) => {
  try {    
    const update = await firebase
      .firestore()
      .collection("Cursos")
      .doc(id)
      .update({
        img: NewCourseInfo.img,
        imgName: NewCourseInfo.imgName,
      });
      success("Imagen actualizada");
      return update;
  } catch (e) {
    error(e);
    return e;
  }
};
export { AddCourse, deleteCourse, DeleteAllComments, EditCourse, editImageCourse };
