import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";

const LoginSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    //Validation
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      !validator.isEmail(email)
    ) {
      if (email.trim() === "" || validator.isEmail(email) === false) {
        setEmailError(true);
      }
      if (password.trim() === "") {
        setPasswordError(true);
      }
    }
    //After validation
    if (validator.isEmail(email) && password.trim() !== "") {
      try {
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    setLoading(false);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border rounded-lg sm:p-12 p-4 w-[90%] sm:w-auto flex flex-col items-center shadow-md">
          <div className="flex flex-col items-center">
            <h1 className=" text-[36px] font-semibold underline">Login</h1>
            <p className=" text-sm text-slate-500` mb-4">Hi, welcome back 👋</p>
          </div>
          <Button
            classname="w-[100%] sm:w-[400px] h-[36px] border hover:bg-slate-200 text-[14px] mb-4 font-bold"
            text={"Login with Google"}
            icon={<FcGoogle />}
          />
          <div className=" flex items-center justify-center gap-1 sm:gap-2 w-[100%] mb-4">
            <div className="w-[20%] h-[1px] border"></div>
            <p className=" text-[12px] ">Or login with email</p>
            <div className="w-[20%] h-[1px] border"></div>
          </div>
          <div className="w-[100%] flex flex-col">
            <label className=" text-[16px] ml-2">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              type="text"
              value={email}
              required={true}
              placeholder="eg: jondoe@gmail.com"
              className={` border border-solid  rounded-lg p-2 text-[1rem]w-[100%] sm:w-[400px] h-[36px] font-normal outline-none text-slate-900 focus:border-slate-900 placeholder:text-slate-400 ${
                emailError ? " border-red-700" : " border mb-2"
              }`}
            ></input>
            {emailError && (
              <p className=" text-red-700 mb-2 text-[12px]">
                Please enter your registered email ID
              </p>
            )}
          </div>
          <div className="w-[100%] flex flex-col">
            <label className=" text-[16px] ml-2">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              type="password"
              value={password}
              required={true}
              placeholder="Enter your password"
              className={` border border-solid  rounded-lg p-2 text-[1rem] w-[100%] sm:w-[400px] h-[36px] font-normal outline-none text-slate-900 focus:border-slate-900 placeholder:text-slate-400 ${
                emailError ? " border-red-700" : " border mb-4"
              }`}
            ></input>
            {passwordError && (
              <p className=" text-red-700 mb-2 text-[12px]">
                Please enter your password
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row w-[100%] items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <input type="checkbox"></input>
              <label>Remember me</label>
            </div>
            <p className=" text-blue-800 font-semibold cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <Button
            classname=" w-[100%] sm:w-[400px] h-[36px] border bg-blue-800 text-white font-bold hover:bg-blue-400"
            onClick={handleLogin}
            text={loading ? "loading..." : "Login"}
          />
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 sm:mt-2">
            <p>Not yet registered?</p>
            <p
              onClick={() => navigate("/sign-up")}
              className=" text-blue-800 font-semibold cursor-pointer"
            >
              Create an Account 💁
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
