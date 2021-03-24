import { useRef, useState } from "react";
import { useForm, useMediaQuery} from "my-customhook-collection";
import {
  Comment,
  Tooltip,
  Image,
  Typography,
  Popconfirm,
  Input,
  Button,
} from "antd";
import {
  DeleteReply,
  UpdateReply,
  AddReply,
} from "../../Firebase/FirestoreFunctions";
import {
  DeleteFilled,
  EditFilled,
  CloseCircleOutlined,
  SaveOutlined,
  SendOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
const ReplyComponent = ({
  id: ReplyId,
  children,
  DocId,
  Creation,
  Reply,
  Replies,
  ReplyTo,
  UserInfo,
  FirebaseApp,
  UserOnlineInfo,
}) => {
  const mediaQuery = useMediaQuery("(max-width: 460px)");
  const ReplyScrollHandler = useRef();
  const EditScrollHandler = useRef();
  const { displayName, photoURL, uid } = UserInfo;
  const [{ EditInputValue }, HandleInputChange, setEditInputValues] = useForm({
    EditInputValue: Reply,
  });
  const [SwitchEdit, setSwitchEdit] = useState(false);

  const EditHandler = () => {
    UpdateReply(FirebaseApp, DocId, Replies, ReplyId, EditInputValue);
    setSwitchEdit(!SwitchEdit);
  };

  const SwitchEditHandler = () => {
    setEditInputValues({
      EditInputValue: Reply,
    });
    setSwitchEdit(!SwitchEdit);

    EditScrollHandler.current.scrollIntoView({ behavior: "smooth" });
  };
  const [
    { ReplyInputValue },
    HandleInputReplyChange,
    setReplyInputValue,
  ] = useForm({
    ReplyInputValue: "",
  });
  const [SwitchReply, setSwitchReply] = useState(false);
  const SwitchReplyHandler = () => {
    setSwitchReply(!SwitchReply);
    ReplyScrollHandler.current.scrollIntoView({ behavior: "smooth" });
  };
  const ReplyHandler = () => {
    AddReply(
      FirebaseApp,
      DocId,
      Replies,
      ReplyInputValue,
      UserOnlineInfo,
      displayName
    );
    SwitchReplyHandler();
    setReplyInputValue({
      ReplyInputValue: "",
    });
  };
  const actions = [
    UserOnlineInfo && uid === UserOnlineInfo.uid && (
      <Tooltip title={"Editar comentario"}>
        <EditFilled onClick={SwitchEditHandler} />
      </Tooltip>
    ),
    UserOnlineInfo && uid === UserOnlineInfo.uid && (
      <Popconfirm
        placement="topLeft"
        title={"¿Quieres eliminar este comentario?"}
        onConfirm={() => DeleteReply(FirebaseApp, DocId, Replies, ReplyId)}
        okText="Si"
        cancelText="No"
      >
        <Tooltip title={"Eliminar comentario"}>
          <DeleteFilled />
        </Tooltip>
      </Popconfirm>
    ),
    UserOnlineInfo && (
      <span key="comment-basic-reply-to" onClick={SwitchReplyHandler}>
        Responder
      </span>
    ),
  ];

  return (
    <Comment
      className="animate__animated animate__fadeIn"
      style={{
        background: "white",
        borderLeft: "ridge 10px",
        marginTop: "5px",
        padding: "10px",
        borderRadius: "5px",
      }}
      actions={actions}
      author={<Title level={5}>{displayName}</Title>}
      avatar={<Image src={photoURL} alt={displayName} />}
      content={
        <>
          <div ref={EditScrollHandler} />
          {SwitchEdit ? (
            <>
              <Input
                name="EditInputValue"
                size="large"
                value={EditInputValue}
                onChange={HandleInputChange}
              />
              <Button
                icon={<CloseCircleOutlined />}
                onClick={SwitchEditHandler}
                danger
              >
                Cancelar
              </Button>
              {EditInputValue !== Reply
                ? EditInputValue && (
                    <Button icon={<SaveOutlined />} onClick={EditHandler}>Guardar cambios</Button>
                  )
                : ""}
            </>
          ) : (
            <p>
              <b>Respondiendo a @{ReplyTo} </b>
              {Reply}
            </p>
          )}
        </>
      }
      datetime={
        <Tooltip  title={Creation}>
          <span>{mediaQuery?"Fecha de publicación":Creation}</span>
        </Tooltip>
      }
    >
      <div ref={ReplyScrollHandler} />
      {SwitchReply && (
        <>
          <Input.TextArea
            onChange={HandleInputReplyChange}
            name={"ReplyInputValue"}
            value={ReplyInputValue}
          />
          <Button
            icon={<CloseCircleOutlined />}
            onClick={SwitchReplyHandler}
            danger
          >
            Cancelar
          </Button>
          {ReplyInputValue && <Button icon={<SendOutlined />} onClick={ReplyHandler}>Responder</Button>}
        </>
      )}
      <div ref={ReplyScrollHandler} style={{scrollMarginTop:"50px"}} />
    </Comment>
  );
};

export default ReplyComponent;
