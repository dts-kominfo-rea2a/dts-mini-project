import React from "react";
import Button from "./ButtonLink";

const User = () => {
  return (
    <ul className="flex gap-4 text-black font-semibold">
      <li className="flex">
        <Button
          buttonName="Log in!"
          destination="/login"
          variant="bg-slate-50 text-black"
        />
      </li>
      {/* <li>
        {" "}
        <Button />
      </li> */}
    </ul>
  );
};

export default User;
