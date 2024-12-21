import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast"



function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if(res.data.success){
        navigate("/login")
        toast.success(res.data.message);

      }
      console.log(res);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center  ">
        <div className=" bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
          <form
            onSubmit={onSubmitHandler}
            className="border border-white px-6 py-2 rounded-md space-y-3 w-96"
          >
            <h1 className="text-2xl text-center">
              <span className="font-bold">Chat </span>
              <span className="text-green-500 font-semibold">App</span>
            </h1>
            <h2 className="text-xl text-white font-bold">Signup</h2>
            <br />
            {/* fullname */}
            <label className="input input-bordered  flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                value={user.fullName}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                type="text"
                className="grow rounded-md p-2 "
                placeholder="Fullname"
              />
            </label>

            {/* email */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                value={user.userName}
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
                type="text"
                className="grow rounded-md p-2"
                placeholder="userName"
              />
            </label>

            {/* password */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                className="grow rounded-md p-2"
                placeholder="Password"
              />
            </label>

            {/* Confirm Password */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                type="password"
                className="grow rounded-md p-2"
                placeholder="Confirm Password"
              />
            </label>

            {/* Male and Female */}

            <div className=" grow flex items-center mx-6 space-x-5 ">
              <div className="flex items-center text-black border rounded-md p-2 bg-white">
                <p>Male</p>
                <input
                  type="checkbox"
                  checked={user.gender === "male"}
                  onChange={() => handleCheckbox("male")}
                  defaultChecked
                  className="checkbox mx-2"
                />
              </div>
              <div className="flex items-center text-black border rounded-md p-2 bg-white">
                <p>Female</p>
                <input
                  type="checkbox"
                  checked={user.gender === "female"}
                  onChange={() => handleCheckbox("female")}
                  defaultChecked
                  className="checkbox mx-2"
                />
              </div>
            </div>
            {/* Text and button */}
            <div className="flex justify-between mx-6">
              <p>
                <span className="text-white"> have an account? </span>
                <Link
                  to={"/login"}
                  className="text-blue-500 underline cursor-pointer"
                >
                  Login
                </Link>
              </p>
              <input
                type="submit"
                value="Signup"
                className="text-white bg-green-600 px-2 py-1 cursor-pointer rounded-lg "
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
