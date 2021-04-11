import { firebase } from "../../../../Firebase/FirebaseConfig";
import moment from "moment";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error } = message;

const AddGalleryItem = (description, img, imgName) => {
  moment.locale("es");
  const creationDate =new Date();
  firebase
    .firestore()
    .collection(`Galería`)
    .doc(JSON.stringify(creationDate))
    .set({
      description,
      date: moment().format(
        "[Publicado el día] D[/]MM[/]YYYY [a las]  h:mm:ss a"
      ),
      img,
      imgName,
    })
    .then(() => {
      success("Contenido agregado satisfactoriamente");
    })
    .catch(() => {
      error("Error al agregar contenido");
    });
};

const DeleteGalleryItem = (id) => {
  firebase
    .firestore()
    .collection(`Galería`)
    .doc(id)
    .delete()
    .then(() => {
      success("Contenido eliminado satisfactoriamente");
    })
    .catch(() => {
      error("Error al eliminar contenido");
    });
};

const UpdateGalleryItem = async (id, description) => {
  try {
    await firebase.firestore().collection(`Galería`).doc(id).update({
      description,
    });
    success("Contenido modificado");
  } catch (e) {
    error(e);
    return e;
  }
};
export { AddGalleryItem, DeleteGalleryItem, UpdateGalleryItem };
