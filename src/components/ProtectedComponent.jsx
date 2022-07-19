import React from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/authentication/firebase";

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const [userAuth, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!userAuth) {
      navigate("/login");
      return;
    }
  }, [userAuth, navigate]);

  if (isLoading) {
    return;
  } else {
    // Bila tidak isLoading (berarti sudah selesai)
    // Kita kembalikan children yang ingin dirender
    return children;
  }
};

export default ProtectedComponent;
