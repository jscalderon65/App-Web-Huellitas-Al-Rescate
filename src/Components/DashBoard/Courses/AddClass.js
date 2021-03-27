import { firebase } from "../../../Firebase/FirebaseConfig";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error/* , info  */} = message;
const AddClass = (id,array,handleCancel,setLoading) => {
    setLoading(true);
  firebase
    .firestore()
    .collection("Cursos")
    .doc(id)
    .update({
      clases:array,
    })
    .then(() => {
        success("Nueva clase agregada");
        setLoading(false);
        handleCancel();
    })
    .catch((e) => {
      error(e);
      setLoading(false);
      handleCancel();
    });
};
const EditClass = (id,array,info,handleCancel,setLoading) => {
    setLoading(true);
    const ArrayEdit=array.map(item=>{
        if(item.DateCreation===info.DateCreation){
            return{
                titulo:info.title,
                description:info.description,
                YoutubeUrl:info.YoutubeUrl,
                DateCreation:info.DateCreation
            }
        }
        return item
    })
  firebase
    .firestore()
    .collection("Cursos")
    .doc(id)
    .update({
      clases: ArrayEdit,
    })
    .then(() => {
        success("Guardando cambios");
        setLoading(false);
        handleCancel();
    })
    .catch((e) => {
      error(e);
      setLoading(false);
      handleCancel();
    });
};
const deleteClass = (id,array,dateCreation)=>{
    firebase
    .firestore()
    .collection("Cursos")
    .doc(id)
    .update({
      clases:array.filter(item=>item.DateCreation!==dateCreation),
    })
    .then(() => {
        success("Clase eliminada");
    })
    .catch((e) => {
      error(e);
    });
}
export {AddClass,deleteClass,EditClass};