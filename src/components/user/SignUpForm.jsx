import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = ({
  email,
  emailHandler,
  password,
  passwordHandler,
  onSubmithandler,
}) => {
  return (
    <section className="w-3/5 h-full bg-slate-50 p-4 flex flex-col gap-4 shadow-lg border-solid border-2 rounded-lg border-sky-700 mt-8">
      <h3 className="w-full font-semibold text-lg">Sign Up!</h3>
      <form
        className="text-start flex flex-col gap-4"
        onSubmit={(e) => {
          onSubmithandler(e);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => emailHandler(e.target.value)}
          className=" outline-none bg-gray-200 p-2 focus:border-b-2 border-solid border-sky-700 rounded-t-lg"
        />
        <label htmlFor="username">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => passwordHandler(e.target.value)}
          className="outline-none bg-gray-200 p-2 focus:border-b-2 border-solid border-sky-700 rounded-t-lg"
        />
        <button
          type="submit"
          className="bg-amber-600 py-2 text-white hover:font-semibold rounded-lg"
        >
          Log in!
        </button>
        <span className="flex gap-2">
          <p className="w-full">
            If you already have an account, you can{" "}
            <Link to="/login">
              <span className="underline underline-offset-4 hover:font-semibold">
                Login Here!
              </span>
            </Link>
          </p>
        </span>
      </form>
    </section>
  );
};

export default SignUpForm;
