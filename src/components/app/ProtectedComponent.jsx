import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../apis/firebase";

const ProtectedComponent = ({ children }) => {
  let navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/denied");
      return;
    }
  }, [user, navigate]);

  if (isLoading) {
    return;
  } else {
    return children;
  }
};

export default ProtectedComponent;
