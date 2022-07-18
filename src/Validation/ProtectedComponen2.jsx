import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/Firebase";

const ProtectedComponentSignUp = ({ children }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/signup");
      return;
    } 
  }, [user, navigate]);

  if (isLoading) {
    return;
  } else {
    return children;
  }
}

export default ProtectedComponentSignUp;

