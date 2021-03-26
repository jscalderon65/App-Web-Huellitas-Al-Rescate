import { firebase } from "./FirebaseConfig";
import { message } from "antd";
import "antd/dist/antd.css";
const { success, error } = message;
const UserGoogleAuth =()=>{
  let provider_Google = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(({ user }) => {
      success(`${user.displayName} ha iniciado sesión`);
      })
    .catch(() => {
      error(`Se ha presentado un error al inicio de sesión`);
    });
}
const googleAuth = () => {
  logout();
  let provider_Google = new firebase.auth.GoogleAuthProvider();
  const AdminEmail = "huellitasparasiempreprae@gmail.com";
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(({ user }) => {
        if(user.email!==AdminEmail){
            error(`Acceso denegado`);
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
      .catch(() => {
        error(`Se ha presentado un error al cerrar sesión`, 3);
      });
  };
export {googleAuth,logout,UserGoogleAuth}
