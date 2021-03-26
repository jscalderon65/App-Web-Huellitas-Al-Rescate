import { firebase } from "../../../Firebase/FirebaseConfig";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error } = message;
const AddCourse = () => {
  firebase
    .firestore()
    .collection(`Cursos`)
    .add({
      fecha: new Date(),
      titulo: `curso ${Math.random()} `,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit nam enim ad porro cupiditate nesciunt, esse fugiat! Velit doloribus eius quibusdam assumenda impedit minima enim quis esse qui dolorem.",
      img:
        "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      clases: [{ titulo: "Si" }, { titulo: "No" }],
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

const deleteCourse = (id, arr) => {
  firebase
    .firestore()
    .collection("Cursos")
    .doc(id)
    .delete()
    .then(() => {
      success("Curso eliminado correctamente");
      if (arr) {
        success("Eliminando comentarios...");
        DeleteAllComments(id, arr);
      }
    })
    .catch(() => {
      error("Error al eliminar el curso");
    });
};
export { AddCourse, deleteCourse, DeleteAllComments };
