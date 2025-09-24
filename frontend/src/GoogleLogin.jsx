import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./api";
import {useNavigate} from 'react-router-dom';

const GoogleLogin = () => {
  const navigate = useNavigate();

    const responceGoogle = async (authResult) => {
        try {
            if (authResult['code']) {
              const result = await googleAuth(authResult['code']);
              const {email, name, picture} = result.data.user;
              const token = result.data.token;
              const obj = {email, name, picture, token};
              localStorage.setItem("user-info", JSON.stringify(obj));
              console.log("Login Successfull: ", result.data);
              navigate('/dashboard');                
            }
        } catch (error) {
            console.log("Error while login with google: ", error);
        }
    }

  const signIn = useGoogleLogin({
    onSuccess: responceGoogle,
    onError: responceGoogle,
    flow: "auth-code",
  });

  

  return (
    <div className="App">
      <button onClick={signIn}>Login with Google</button>
    </div>
  );
};

export default GoogleLogin;
