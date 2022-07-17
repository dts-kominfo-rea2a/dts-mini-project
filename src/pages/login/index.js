import React from "react";
import { Button, Input } from "../../components";

const Login = () => {
  return (
    <div className="bg-movie bg-left bg-no-repeat bg-cover w-full h-screen">
      <div className="wrapper bg-gradient-to-r from-transparent via-black to-black w-full h-screen flex justify-end">
        <div className="wrapper w-1/2 h-full flex flex-col justify-center items-center">
          <form className="flex flex-col gap-12">
            <div className="input flex flex-col gap-5">
              <Input type="email" name="email" id="email" placeholder="EMAIL" />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="PASSWORD"
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
