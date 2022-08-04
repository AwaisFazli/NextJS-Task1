import { useState } from "react";
import { useRouter } from "next/router";

import Navbar from "./Components/Navbar.js";

const Signin = () => {
  const Router = useRouter();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [show, setshow] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setemail(value);
    }
    if (id === "password") {
      setpassword(value);
    }
  };

  const routesignup = (e) => {
    Router.push("/signup");
  };

  const call = async () => {
    let res = await fetch(`http://localhost:4000/users?email=${email}`);
    let data = await res.json();

    let pass = data.map(function (e) {
      return e.password;
    });
    let user = data.map(function (e) {
      return e.username;
    });
    if (pass[0] === password) {
      <Navbar username={user} toggle={true} />;
      Router.push("/");
    } else {
      setshow(true);
    }
  };

  const handleSubmit = () => {
    call();
  };

  return (
    <div className="bg-yellow-600 flex justify-center items-center py-20 relative">
      <div className="relative">
        <div className="w-full absolute h-[500px] top-0 border rounded-lg bg-black opacity-20 ">
          hello
        </div>

        <div className=" bg-transparent h-[500px] border border-black rounded-lg drop-shadow-2xl flex-row justify-center p-12">
          <div className="font-bold text-3xl my-2">LogIn</div>
          <div className="my-4 space-y-1">
            <h1 className="font-medium text-lg">Email</h1>
            <input
              className="px-4 h-10 border opacity-70 border-black rounded-md w-full drop-shadow-xl "
              type="text"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="my-4 space-y-1">
            <h1 className="font-medium text-lg">Password</h1>
            <input
              className="px-4 h-10 border opacity-70 border-black rounded-md w-full drop-shadow-xl"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div
            className="my-4 w-full flex justify-center items-center text-white font-bold text-lg h-11 border opacity-70 bg-black border-black rounded-md drop-shadow-xl cursor-pointer"
            onClick={() => handleSubmit()}
            type="submit"
          >
            Sign In
          </div>
          <div
            className="my-4 w-full flex justify-center items-center text-white font-bold text-lg h-11 border opacity-70 bg-black border-black rounded-md drop-shadow-xl cursor-pointer"
            onClick={() => routesignup()}
          >
            Sign Up
          </div>

          <div>
            {show ? (
              <div className="w-full bg-red-700 text-white p-1 rounded-lg flex justify-center items-center underline">
                {" "}
                Invalid Password or Email
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
