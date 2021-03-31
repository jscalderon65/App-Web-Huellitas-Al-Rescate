import { message } from "antd";
import { editImageCourse } from "./AddCourse";
import "antd/dist/antd.css";
const { success, error } = message;
const deleteImage = async (firebase, ref, title) => {
  const storage = firebase.storage();
  const desertRef = storage.ref(ref).child(title);
  try {
    await desertRef.delete();
    console.log(`Se ha borrado ${ref}/${title}`);
    success("Operación completada");
  } catch (e) {
    console.log(e);
    error(e);
    return e;
  }
};

const uploadImage = async (setLoading, setImageUrl, file, ref, firebase) => {
  const storage = firebase.storage();
  const date = JSON.stringify(new Date());
  const name = `${file.name}+${date}`;
  try {
    setLoading(true);
    const newRef = storage.ref(ref).child(name);
    await newRef.put(file);
    let urlImagen = await newRef.getDownloadURL();
    const ImageInfo = {
      url: urlImagen,
      title: name,
      direction: `${ref}/${file.name}`,
    };
    setImageUrl(ImageInfo);
    console.log(ImageInfo);
    setLoading(false);
    return { urlImagen, ImageName: name };
  } catch (error) {
    alert(error);
    console.log(error);
    setLoading(false);
  }
};
const EditUploadImage = async (
  file,
  ref,
  firebase,
  prevImageInfo,
  CourseId
) => {
  const storage = firebase.storage();
  const date = JSON.stringify(new Date());
  const name = `${file.name}+${date}`;
  const desertRef = storage.ref(prevImageInfo.ref).child(prevImageInfo.title);
  try {
    const newRef = storage.ref(ref).child(name);
    await newRef.put(file);
    let urlImagen = await newRef.getDownloadURL();
    const ImageInfo = {
      url: urlImagen,
      title: name,
      direction: `${ref}/${file.name}`,
    };
    console.log(ImageInfo);
    editImageCourse(CourseId, { img: urlImagen, imgName: name });
    await desertRef.delete();
    return { urlImagen, ImageName: name };
  } catch (e) {
    error(e);
    return e
    console.log(e);
  }
};



export { uploadImage, deleteImage, EditUploadImage };
