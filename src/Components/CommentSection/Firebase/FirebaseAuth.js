import { message as Message } from "antd";
import "antd/dist/antd.css";
const { success, error } = Message;
const googleAuth = (firebase) => {
  let provider_Google = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(() => {
      success(`Se ha iniciado sesión`);
    })
    .catch((Error) => {
      error(`Se ha presentado un error al inicio de sesión`);
    });
};

const logout = (firebase) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      success(`El usuario ha cerrado sesión`, 5);
    })
    .catch((Error) => {
      error(`Se ha presentado un Error ${Error}`, 5);
    });
};

export { logout, googleAuth };
