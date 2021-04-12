import React from "react";
import PublicSwitch from "./PublicSwitch";
import PrivateSwitch from "./PrivateSwitch";
import { firebase } from "../../Firebase/FirebaseConfig";
import { useFirebaseUser } from "my-customhook-collection";
import { BrowserRouter } from "react-router-dom";
const MainRouter = () => {
  const [isOn] = useFirebaseUser(firebase);
  return (
    <BrowserRouter>
      <div>
        {isOn && isOn.email === "huellitasalrescateprae@gmail.com" ? (
          <PrivateSwitch UserInfo={isOn} />
        ) : (
          <PublicSwitch />
        )}
      </div>
    </BrowserRouter>
  );
};
export default MainRouter;
