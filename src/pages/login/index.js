import React, { useEffect } from "react";
//hooks
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail, setPass } from "../../app/userReducer/userSlice";
import { auth, login } from "../../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
//components
import { Button, Input } from "../../components";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, isLoading, error] = useAuthState(auth);

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const handlePassword = (e) => {
    dispatch(setPass(e.target.value));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="bg-movie bg-left bg-no-repeat bg-cover w-full h-screen">
      <div className="wrapper bg-gradient-to-r from-transparent via-black to-black w-full h-screen flex justify-end">
        <div className="wrapper w-1/2 h-full flex flex-col justify-center items-center">
          <form className="flex flex-col gap-12" onSubmit={handleLogin}>
            <div className="input flex flex-col gap-5">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="EMAIL"
                onChange={handleEmail}
                value={email}
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="PASSWORD"
                onChange={handlePassword}
                value={password}
              />
            </div>
            <Button type="submit">LOGIN</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
