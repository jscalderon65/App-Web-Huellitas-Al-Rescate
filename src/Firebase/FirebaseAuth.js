import { firebase } from "./FirebaseConfig";
import { message } from "antd";
import { AdminEmails } from '../Admin/AdminEmails';
import "antd/dist/antd.css";
const { success, error } = message;
const UserGoogleAuth = () => {
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
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(({ user }) => {
      if (!AdminEmails.includes(user.email)) {
        error(`Acceso denegado`);
        logout();
      } else {
        success(`Se ha iniciado sesión`);
        firebase.analytics().logEvent(`Inicio de sesión en el dashboard (${user.email})`);
        /* console.log(JSON.stringify(user)); */
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
export { googleAuth, logout, UserGoogleAuth }
