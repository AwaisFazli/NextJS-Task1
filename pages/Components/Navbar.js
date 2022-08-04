import React from "react";
import { useRouter } from "next/router";

const Navbar = ({ toggle, username }) => {
  const Router = useRouter();

  const routelogin = () => {
    Router.push("/signin");
  };

  const routesignup = () => {
    Router.push("/signup");
  };

  return (
    <div className="w-full bg-black flex justify-between">
      <div className="text-yellow-600 m-2 ml-4 font-bold text-2xl">
        GrolTech
      </div>

      {username ? (
        <div>Welcome {username}</div>
      ) : (
        <div className="flex justify-between">
          <div
            className="text-yellow-600 m-2 font-medium text-lg cursor-pointer"
            onClick={() => routelogin()}
          >
            Sign In
          </div>
          <div
            className="text-yellow-600 m-2 mr-4 font-medium text-lg cursor-pointer"
            onClick={() => routesignup()}
          >
            Sign Up
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
