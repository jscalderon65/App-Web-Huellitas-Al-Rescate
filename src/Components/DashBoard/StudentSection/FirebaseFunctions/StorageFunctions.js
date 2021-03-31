import { firebase } from "../../../../Firebase/FirebaseConfig";
import {AddGalleryItem,DeleteGalleryItem} from './FirestoreFunctions';
import { message } from "antd";
import "antd/dist/antd.css";
const { error } = message;

const DeleteImage = async (ref, title, id) => {
    const storage = firebase.storage();
    const desertRef = storage.ref(ref).child(title);
    try {
        await desertRef.delete();
        console.log(`Se ha borrado ${ref}/${title}`);
        DeleteGalleryItem(id);
    } catch (e) {
        console.log(e);
        error(e);
        return e;
    }
};

const AddImage = async (file, ref, description) => {
    const storage = firebase.storage();
    const date = JSON.stringify(new Date());
    const name = `${file.name}+${date}`;
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
        AddGalleryItem(description,urlImagen,name);
        return ImageInfo;
    } catch (e) {
        error(e);
        console.log(e);
        return e;
    }
};

export { AddImage, DeleteImage };