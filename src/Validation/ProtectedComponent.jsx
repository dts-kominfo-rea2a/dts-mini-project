import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/Firebase";


const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    } else {
      navigate("/");
      return;
    }
  }, [user, navigate]);

  if (isLoading) {
    return;
  } else {

    return children;
  }
}

export default ProtectedComponent;

