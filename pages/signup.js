import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Signup = () => {
  const Router = useRouter();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setusername(value);
    }
    if (id === "email") {
      setemail(value);
    }
    if (id === "password") {
      setpassword(value);
    }
  };

  const addcreds = async () => {
    let creds = {
      username: username,
      email: email,
      password: password,
    };

    await fetch(`http://127.0.0.1:4000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });

    Router.push("/signin");
  };

  const handleSubmit = () => {
    addcreds();
  };

  return (
    <div className="bg-yellow-600 flex justify-center items-center py-20">
      <div className="relative">
        <div className="w-full h-[510px] absolute top-0 border rounded-lg bg-black opacity-20 ">
          hello
        </div>
        <div className=" h-[510px]  border border-black rounded-lg drop-shadow-2xl flex-row justify-center p-12">
          <form>
            <div className="font-bold text-3xl my-2">Sign Up</div>
            <div className="my-4 space-y-1">
              <h1 className="font-medium text-lg">Username</h1>
              <input
                className="px-4 h-11 border opacity-70 border-black rounded-md w-full drop-shadow-xl "
                type="text"
                id="username"
                placeholder="UserName"
                value={username}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="my-4 space-y-1">
              <h1 className="font-medium text-lg">Email</h1>
              <input
                className="px-4 h-11 border opacity-70 border-black rounded-md w-full drop-shadow-xl "
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="my-4 space-y-1">
              <h1 className="font-medium text-lg">Password</h1>
              <input
                className="px-4 h-11 border opacity-70 border-black rounded-md w-full drop-shadow-xl"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <hr />
            <div
              className="my-8 flex justify-center items-center cursor-pointer  text-white font-bold text-lg h-12 border opacity-70 bg-black border-black rounded-md w-full drop-shadow-xl"
              onClick={() => handleSubmit()}
              type="submit"
            >
              Sign Up
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
