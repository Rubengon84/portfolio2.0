import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();


  return <button onClick={() => {loginWithRedirect({ appState: { targetUrl: window.location.pathname } });console.log(loginWithRedirect);}
                                                    }>Authenticate Yourself</button>;
};

export default LoginButton;
