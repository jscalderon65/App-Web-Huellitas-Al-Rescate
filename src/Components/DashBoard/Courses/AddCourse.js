import { firebase } from "../../../Firebase/FirebaseConfig";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error } = message;
const AddCourse = () => {
  firebase
    .firestore()
    .collection(`Cursos`)
    .doc(JSON.stringify(new Date()))
    .set({
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
const deleteCourse = (id) => {
  firebase
    .firestore()
    .collection("Cursos")
    .doc(id)
    .delete()
    .then(() => {
      success("Curso eliminado correctamente");
      firebase.firestore()
      .collection("Cursos")
      .doc(`Comments of ${id}`)
      .delete()
      .then(() => {
        success("Comentarios del curso eliminados correctamente");
      })
      .catch(() => {
        error("Error al eliminar el curso.");
      });
    })
    .catch(() => {
      error("Error al eliminar el curso.");
    });
};
export { AddCourse, deleteCourse };
