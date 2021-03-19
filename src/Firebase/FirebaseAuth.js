import { firebase } from "./FirebaseConfig";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error } = message;
const googleAuth = () => {
  let provider_Google = new firebase.auth.GoogleAuthProvider();
  const AdminEmail = "huellitasparasiempreprae@gmail.com";
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(({ user }) => {
        if(user.email!==AdminEmail){
            error(`Acceso denegado ${user.email} ${AdminEmail}`);
            logout();
        }else{
          success(`Se ha iniciado sesión`);
          console.log(JSON.stringify(user));
        }
      })
    .catch(() => {
      error(`Se ha presentado un error al inicio de sesión`);
    });
};
const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        success(`Se ha cerrado sesión`, 3);
      })
      .catch(() => {
        error(`Se ha presentado un error al cerrar sesión`, 3);
      });
  };
export {googleAuth,logout}
