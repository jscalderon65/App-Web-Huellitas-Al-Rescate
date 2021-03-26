import { message as Message } from "antd";
import Store from '../Redux/Store';
import "antd/dist/antd.css";
const { success, error: Error } = Message;
const Month = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const AddComment = (firebase, CommentContent, userInfo) => {
  const CreationDate = new Date();
  const Creation =  `${CreationDate.getDate()} de ${
    Month[CreationDate.getMonth()]
  } del ${CreationDate.getFullYear()}, a las ${CreationDate.getHours()}:${CreationDate.getMinutes()} horas`;
  let DocumentRef = firebase
    .firestore()
    .collection(Store.getState().CollectionName)
    .doc(JSON.stringify(new Date()));
  DocumentRef.set({
    Creation,
    CommentContent,
    userInfo,
    Replies: [],
  })
    .then(() => {
      success("¡Comentario agregado!", 5);
    })
    .catch((error) => {
      Error("Error agregando comentario", 3);
    });
};

const DeleteComment = (firebase, DocId) => {
  let DocumentRef = firebase.firestore().collection(Store.getState().CollectionName).doc(DocId);
  DocumentRef.delete()
    .then(() => {
      success("Se ha eliminado el comentario", 5);
    })
    .catch((error) => {
      Error("Error eliminando el comentario", 3);
    });
};

const UpdateComment = (firebase, DocId, NewComment) => {
  let DocumentRef = firebase.firestore().collection(Store.getState().CollectionName).doc(DocId);
  DocumentRef.update({
    CommentContent: NewComment,
  })
    .then(() => {
      success("Se ha actualizado el comentario", 5);
    })
    .catch((error) => {
      Error("Error al editar comentario", 3);
    });
};

const AddReply = (
  firebase,
  DocId,
  ReplyArray,
  Reply,
  userOnlineInfo,
  ReplyTo
) => {
  const { uid, email, displayName, photoURL } = userOnlineInfo;
  const CreationDate = new Date();
  const Creation = `A las ${CreationDate.getHours()}:${CreationDate.getMinutes()}, el dia ${CreationDate.getDate()} de ${
    Month[CreationDate.getMonth()]
  } del ${CreationDate.getFullYear()}`;
  let DocumentRef = firebase.firestore().collection(Store.getState().CollectionName).doc(DocId);
  DocumentRef.update({
    Replies: [
      ...ReplyArray,
      {
        id: JSON.stringify(new Date()),
        Creation,
        Reply,
        ReplyTo,
        UserInfo: {
          uid,
          email,
          displayName,
          photoURL,
        },
      },
    ],
  })
    .then(() => {
      success("¡Nueva respuesta agregada!", 5);
    })
    .catch((error) => {
      Error("Error agregando respuesta", 3);
    });
};
const DeleteReply = (firebase, DocId, ReplyArray, ReplyId) => {
  let DocumentRef = firebase.firestore().collection(Store.getState().CollectionName).doc(DocId);
  DocumentRef.update({
    Replies: ReplyArray.filter((reply) => reply.id !== ReplyId),
  })
    .then(() => {
      success("Se ha eliminado el comentario", 5);
    })
    .catch((error) => {
      Error("Error eliminando el comentario", 3);
    });
};
const UpdateReply = (firebase, DocId, ReplyArray, ReplyId, ReplyUpdate) => {
  let DocumentRef = firebase.firestore().collection(Store.getState().CollectionName).doc(DocId);
  DocumentRef.update({
    Replies: ReplyArray.map((item) => {
      if (item.id === ReplyId) {
        item.Reply = ReplyUpdate;
      }
      return item;
    }),
  })
    .then(() => {
      success("Se ha actualizado el comentario", 5);
    })
    .catch((error) => {
      Error("Error al editar comentario", 3);
    });
};

export {
  AddComment,
  DeleteComment,
  UpdateComment,
  AddReply,
  DeleteReply,
  UpdateReply,
};
