// Sekarang pada ProtectedComponent, kita tetap harus menggunakan useEffect
// Agar terlepas dari Warning yang diberikan
// (useNavigate harus di dalam useEffect)
import React, { useEffect } from "react";

// Di sini kita akan akan menggunakan hooks:
// - untuk mendeteksi user sudah login (useAuthState)
// - untuk memaksa navigasi bila user belum login dengan (useNavigate)
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// Untuk bisa menggunakan useAuthState, kita membutuhkan auth dari authentication/firebase
import { auth } from "../authentication/firebase";

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    // console.log(user);
    if (isLoading) {
      return;
    } else if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (isLoading) {
    return;
  } else {
    return children;
  }
};

export default ProtectedComponent;
