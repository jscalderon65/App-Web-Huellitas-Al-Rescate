import React from "react";
import Store from "../../Redux/Store";
import { GetCollection } from "../../Redux/ActionCreator";
import { connect } from "react-redux";
import {
  useFirebaseUser,
  useOnSnapshotCollection,
} from "my-customhook-collection";
import {
  CommentComponent,
  AddCommentComponent,
  ReplyComponent,
} from "../index";
import { BackTop } from "antd";
const CommentBoxContainer = ({ CollectionName, GetCollection, firebase }) => {
  GetCollection(CollectionName);
  const db = firebase.firestore();
  const refColl = db.collection(Store.getState().CollectionName);
  const [comments] = useOnSnapshotCollection(refColl);
  const [UserInfo] = useFirebaseUser(firebase);
  return (
    
    <div
      style={{
        padding: "20px"
      }}
    >
      {UserInfo && (
        <AddCommentComponent FirebaseApp={firebase} UserInfo={UserInfo} />
      )}
      {comments &&
      <>
       { comments.reverse().map((comment) => (
          <CommentComponent
            FirebaseApp={firebase}
            key={comment.id}
            {...comment}
            UserOnlineInfo={UserInfo}
          >
            {comment.Replies.map((Reply) => (
              <ReplyComponent
                key={Reply.id}
                UserOnlineInfo={UserInfo}
                DocId={comment.id}
                Replies={comment.Replies}
                FirebaseApp={firebase}
                {...Reply}
              />
            ))}
          </CommentComponent>
        ))}
      </>
      }
      <BackTop />
    </div>
  );
};
const mapStateToProps = (state) => ({
  Collection: state.CollectionName,
});
const mapDispatchToProps = (dispatch) => ({
  GetCollection(name) {
    dispatch(GetCollection(name));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentBoxContainer);
