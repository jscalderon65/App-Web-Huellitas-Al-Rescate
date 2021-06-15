import React from "react";
import PublicSwitch from "./PublicSwitch";
import PrivateSwitch from "./PrivateSwitch";
import { firebase } from "../../Firebase/FirebaseConfig";
import { useFirebaseUser } from "my-customhook-collection";
import { BrowserRouter } from "react-router-dom";
import { AdminEmails } from '../../Admin/AdminEmails';
const MainRouter = () => {
  const [isOn] = useFirebaseUser(firebase);
  return (
    <BrowserRouter>
      <div>
        {isOn && (AdminEmails.includes(isOn.email)) ? (
          <PrivateSwitch UserInfo={isOn} />
        ) : (
          <PublicSwitch firebase={firebase}/>
        )}
      </div>
    </BrowserRouter>
  );
};
export default MainRouter;
